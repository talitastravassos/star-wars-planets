import MaterialTable from 'material-table';
import React from 'react';
import { IPlanet } from '../../models/StarWars.types';
import { Column } from '../../models/Table.types';

interface Props {
  rows: IPlanet[];
  title: string;
  columns: Column[];
}

const onSearch = (search: string) => {
  // console.log(search);
};

const Table: React.FC<Props> = ({ rows, columns, title }) => {
  return (
    <MaterialTable
      title={title}
      columns={columns}
      data={rows}
      options={{
        filtering: false,
      }}
      onSearchChange={onSearch}
    />
  );
};

export default Table;
