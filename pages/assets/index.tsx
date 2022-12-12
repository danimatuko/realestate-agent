import { PostgrestError } from '@supabase/supabase-js';
import React from 'react';
import CardList from '../../components/CardList';
import useSelect from '../../hooks/useSelect';
import { IAsset } from '../../interface/IAsset';

const Assets = () => {
  const { data: assets, error } = useSelect('assets');

  assets && console.log(assets);

  return (
    <div>
      <CardList assets={assets} />
    </div>
  );
};

export default Assets;
