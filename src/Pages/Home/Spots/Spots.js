import React from 'react';
import { useQuery } from 'react-query'
import Loading from '../../../Shared/Loading/Loading';

const Spots = () => {
    const { data: spots, isLoading, Refetch } = useQuery('spots', () => fetch('http://localhost:5000/spots').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(spots);

    return (
        <div>
            <div>
                <div className='text-3xl text-center font-bold text-gray-300'>Spots</div>
                <div className='flex justify-center'>
                    <div className='w-8 h-1 bg-slate-300 rounded-lg mr-1'></div>
                    <div className='w-6 h-1 bg-slate-300 rounded-lg mr-1'></div>
                    <div className='w-4 h-1 bg-slate-300 rounded-lg mr-1'></div>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Spots;