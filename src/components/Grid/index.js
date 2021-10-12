import React from 'react';
import { Wrapper, Content } from '../Grid/Grid.styles'
import Spinner from '../Header/Spinner';
import MovieItem from './MovieItem';


const Grid = ({ movies, loading }) => {
       return loading ? (
         <Spinner />
       ) : (
         <Wrapper>
           <Content>
             <section className="cards">
               {movies.map((movie) => (
                 <MovieItem key={movie.id} movie={movie}></MovieItem>
               ))}
             </section>
           </Content>
         </Wrapper>
       );
        

};

export default Grid;