import React from 'react';

import { useAppDispatch, useAppSelector } from 'shared/hooks/useRedux';
import {getAuth} from 'app/store/AuthThunk'

const useInitializing = () => {
  const dispatch = useAppDispatch()
  const { loader } = useAppSelector(state => state.auth) 

  React.useEffect(():any => {
      dispatch(getAuth())
  }, [])

  return loader
}

export default useInitializing