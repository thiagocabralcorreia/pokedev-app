
import React, { useState, useEffect, useCallback } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';

import { api } from '../services/api';
import { RootStackParamList } from '../routes';
import { ListItem } from '../components/ListItem';
import { Loading } from '../components/Loading';
import { Header } from '../components/Header';
import { useURL } from '../context/url.context';

import { Container } from '../styles/theme/ListScreen';

type listScreen = StackNavigationProp<RootStackParamList, 'ListScreen'>;

export const ListScreen = () =>{
	const [ pokemonList, setPokemonList ] = useState([]);
	const [ currentPage, setCurrentPage ]= useState(20); // initial: 20 items per page
	const [ isLoading, setIsLoading ]= useState(false);

	const { currentURL, setCurrentURL } = useURL();

	const navigation = useNavigation<listScreen>();

	const getData = async () => {
		setIsLoading(true);
		try {
			const { data } = await axios.get(`${api}?limit=${currentPage}`);
			setPokemonList([ ...data.results ]);
			setIsLoading(false);
		} catch(error) {
			alert(error.message);
		}
	}

	// update pokemon url and direct to DetailScreen
	const handleOnPress = useCallback((event) => {
		setCurrentURL(event)
		navigation.navigate('DetailScreen')
	}, [currentURL]);

	const loadMoreItem = () => {
		setCurrentPage(currentPage + 20);
	};

	useEffect(() => {
		getData();
	}, [currentPage]);

	return (
		<>
			<Header title='Lista de Pokémons' />
			<Container>
					<FlatList
						data={pokemonList}
						renderItem={
						  ({ item }) => (
						  	<ListItem pokemon={item} onPress={() => handleOnPress(item.url)} />
						)}
						keyExtractor={(item, index) => index.toString()}
						onEndReached={loadMoreItem}
						onEndReachedThreshold={0}
						ListFooterComponent={ <Loading load={isLoading}/> }
					/>
			</Container>
		</>
	);
};
