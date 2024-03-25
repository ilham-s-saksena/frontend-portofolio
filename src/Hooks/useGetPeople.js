import React from 'react'
import { getPeople } from '../Services/people';

export const useGetPeople = () => {
  const [snapshot, setSnapshot] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  const fetchPeople = async () => {
    try {
        setSnapshot(await getPeople())
    } catch (error) {
        throw new Error(error);
    } finally {
        setLoading (false);
    }
  }
  
  React.useEffect(()=>{
    fetchPeople()
  }, [])

    return {
        snapshot,
        loading
    }
}
