Ext.define('PivotGrid.view.main.Main',{
  extend: 'Ext.pivot.Grid',
  store: 'SalespersonSalesStore',
  title: 'Sales Pivot Grid',


  // Begin coding lab here
  tbar: [{
      xtype: 'combo',
      itemId: 'idSelect',
      fieldLabel: 'Select report',
      editable: false,
      flex: 1,
      value: 'r1',
      store: [
          ['r1', 'What are the order amounts of each salesperson?'],
          ['r2', 'What are the order amounts of each salesperson in a specific country?'],
          ['r3', 'How did salespeople perform in a specific year?']
      ],
      listeners: {
        change: function(combo, newValue, oldValue, eOpts) {
            var pivotgrid = combo.up('pivotgrid');
            switch (newValue) {
                case 'r1':
                    pivotgrid.reconfigurePivot({
                        topAxis: []
                    });
                    break;
                case 'r2':
                    pivotgrid.reconfigurePivot({
                        topAxis: [{
                            dataIndex: 'country',
                            direction: 'ASC'
                        }]
                    });
                    break;
                case 'r3':
                    pivotgrid.reconfigurePivot({
                        topAxis: [{
                            dataIndex: 'year',
                           direction: 'ASC'
                        }]
                    });
                    break;
            }
          }
      },
  }],

  matrixConfig: {
     type: 'local',
     store: 'SalespersonSalesStore'
  },

  leftAxis: [{
      width: 120,
      id: 'salesperson',
      dataIndex: 'salesperson',
      header: 'Sales person'
  }],

  aggregate: [{
      measure:    'amount',
      header:     'Sales',
      aggregator: 'sum',
      align:      'right',
      width:      135,
      renderer:   Ext.util.Format.numberRenderer('0,000.00')
  }]
});
