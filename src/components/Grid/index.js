import React from 'react';

import { Wrapper, Content } from './Grid.styles';
import Spinner from '../Header/Spinner';


const Grid = ({ header, children, loading }) => {
       return loading ? (
         <Spinner />
       ) : (
         <Wrapper>
           <h1>{header}</h1>
           <Content>
                    {children}   
           </Content>
         </Wrapper>
       );
        

};

export default Grid;