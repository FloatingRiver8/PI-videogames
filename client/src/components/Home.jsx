import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllGenres, getAllVg } from '../actions'
import Card from './Card/Card'
import s from '../components/Card/Card.module.css'





function Home() {

    const dispatch = useDispatch();
    const allVg = useSelector((state) => state.allVg)//useSelector es lo mismo que hacer el mapStateToProps, en esta constante me trae todo lo q esté en el estado dogs
    const allGenres = useSelector((state) => state.allGenres)


    useEffect(() => {
        dispatch(getAllVg())
        dispatch(getAllGenres())
    }, []) // si no pongo el array de dependencias, en el back me tira todo el tiempo un status 304

    return (
        <div className = {`${s.home_cardDiv}`}>
            {/* <h2>Home sweet home</h2> */}
            {

                allVg.map((vg) => {

                    return (
                        <div  key={vg.id}>
                            <Card  name={vg.name} image={vg.image} key={vg.id} genres={vg.genres} platforms={vg.platforms} />
                        </div>
                    )



                }
                )}
        </div>
    )
}


export default Home