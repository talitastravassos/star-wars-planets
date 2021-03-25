import MaterialTable from 'material-table';
import React from 'react';
import '../../App.scss';
import { IPlanet } from '../../models/StarWars.types';
import { Column } from '../../models/Table.types';

interface Props {
  rows: IPlanet[];
  title: string;
  columns: Column[];
  onSearch: (search: string) => void;
}

const Table: React.FC<Props> = ({ rows, columns, title, onSearch }) => {
  return (
    <MaterialTable
      title={title}
      columns={columns}
      data={rows}
      options={{
        filtering: false,
        headerStyle: {
          backgroundColor: '#000000',
          color: '#eeff00',
        },
      }}
      onSearchChange={search => onSearch(search)}
    />
  );
};

export default Table;
