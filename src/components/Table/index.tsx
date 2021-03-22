import MaterialTable from 'material-table';
import React from 'react';
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
      }}
      onSearchChange={search => onSearch(search)}
    />
  );
};

export default Table;
