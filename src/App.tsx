import './App.css';
import React, { useEffect, useState } from 'react';
import { Router } from './router/Router';
import { db}  from "./firebase";
import { ref, onValue } from "firebase/database"
import { setQuestions, setTotalCards, setPercent } from './redux-toolkit/slices/questionsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './redux-toolkit/store/store';


function App() {
	const currentCardQuestion = useSelector((state: RootState) => state.questions.currentCardQuestion)
	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		dispatch(setQuestions(
			[
				{
					id: 1,	
					question: "Сколько полос на флаге США?",
					values: [{id: 1, value: "16"}, {id: 2, value: "15"}, {id: 3, value: "10"}, {id: 4, value: "13"}],
					correct: "13"
				},
				{
					id: 2,
					question: "Какое национальное животное Австралии?",
					values: [{id: 1, value: "Кенгуру"}, {id: 2, value: "Кошка"}, {id: 3, value: "Собака"}, {id: 4, value: "Лев"}],
					correct: "Кенгуру"
				},
				{
					id: 3,
					question: "Сколько дней нужно, чтобы Земля совершила оборот вокруг Солнца?",
					values: [{id: 1, value: "153"}, {id: 2, value: "215"}, {id: 3, value: "365"}, {id: 4, value: "413"}],
					correct: "365"
				},
				{
					id: 4,		
					question: "Какая валюта Дании?",
					values: [{id: 1, value: "Евро"}, {id: 2, value: "Рубль"}, {id: 3, value: "Доллар"}, {id: 4, value: "Крона"}],
					correct: "Крона"
				},
				{
					id: 5,
					question: "Сколько элементов в периодической таблице?",
					values: [{id: 1, value: "161"}, {id: 2, value: "118"}, {id: 3, value: "120"}, {id: 4, value: "103"}],
					correct: "118"
				}
			]
		))
		dispatch(setTotalCards())
		dispatch(setPercent(currentCardQuestion))
	}, [])

  	return (
		<Router />
	);
}

export default App;


// useEffect(() => {
// 	const questions = ref(db, "questions");
// 	console.log(questions)
// 	onValue(questions, (snapshot) => {
// 		console.log(snapshot)
// 		const data = snapshot.val()
// 		dispatch(setQuestions(data))
// 		dispatch(setTotalCards())
// 		dispatch(setPercent(currentCardQuestion))
// 	});
// }, [])