import React from "react";
import { Chart } from "react-google-charts";


function Charts() {

  return (
    <>
      <Chart 
        width={300}
        chartType="PieChart"
        loader={<div><strong><b>Loading</b></strong></div>}
        data={[
          ['Name', 'Gender', 'Age', 'Donuts eaten'],
          ['Estilização', 'Front-End', 12, 5],
          ['Banco de Dados', 'Back-End', 20, 7],
          ['Validação do usuário', 'Front-End', 7, 3],
          ['MicroServices', 'Back-End', 54, 2],

        ]}
        options={{
          legend: 'none',
          chartArea: { left: 10, top: 10, right: 0, bottom: 0 },
          pieSliceText: 'label',
          backgroundColor:"#282c34",
          
        }}
        rootProps={{ 'data-testid': '1' }}
        chartWrapperParams={{ view: { columns: [0, 3] } }}
        chartPackages={['corechart', 'controls']}
        controls={[
          {
            controlEvents: [
              {
                eventName: 'statechange',
                callback: ({ chartWrapper, controlWrapper }) => {
                  alert(
                    'State changed to ' + JSON.stringify(controlWrapper.getState()),
                  )
                },
              },
            ],
            controlType: 'CategoryFilter',
            options: {
              filterColumnIndex: 1,
              ui: {
                labelStacking: 'vertical',
                label: 'Desafios em Produção:',
                allowTyping: false,
                allowMultiple: false,
              },
            },
          },
        ]}
      />
    </>
  );
}

export default Charts;
