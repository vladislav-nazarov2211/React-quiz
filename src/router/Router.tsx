import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { CardStart } from '../pages/CardStart';
import { Card1 } from '../pages/Card1';
import { Card2 } from '../pages/Card2';
import { Card3 } from '../pages/Card3';
import { Card4 } from '../pages/Card4';
import { Card5 } from '../pages/Card5';
import { AmostDone } from '../pages/AlmostDone';
import { Final } from '../pages/Final';

export const Router = () => {
		
    return (
        <BrowserRouter>
			<Routes>
				<Route path='/' element={<CardStart />}/>
				<Route path='/1' element={<Card1 />}/>
				<Route path='/2' element={<Card2 />}/>
				<Route path='/3' element={<Card3 />}/>
				<Route path='/4' element={<Card4 />}/>
				<Route path='/5' element={<Card5 />}/>
				<Route path='/almostdone' element={<AmostDone />}/>
				<Route path='/final' element={<Final />}/>
			</Routes>  
    	</BrowserRouter>
    )
}