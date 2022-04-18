import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto'

const Coin = ({coin}) => {

    const dataGraphLine = () => {
        let data = []
        for (let i = 0; i < coin.sparkline.length; i++) {
          let value = parseFloat(coin.sparkline[i]).toFixed(2);
          data = [...data, value]
        }
        return data
      }
    
      const setGraphColor = () => {
        if (coin.change < 0) {
          return '#ef4b09'
        } else {
          return '#00ff1a'
        }
      }
    
      const data = {
        labels: ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.','.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
        datasets: [
          {
            fill: false,
            lineTension: 0.01,
            backgroundColor: setGraphColor(),
            borderColor: setGraphColor(),
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: setGraphColor(),
            pointBackgroundColor: setGraphColor(),
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: setGraphColor(),
            pointHoverBorderColor: setGraphColor(),
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: dataGraphLine(),
          },
        ],
      }
    
      const options = {
        plugins: {
          legend: {
            display: false,
          },
        },
      }


  return (
    <Wrapper>
         <div>
            <div style={{ flex: 2 }}>
                <NameCol>
                    <CoinIcon>
                        <Image src={coin.iconUrl} width={50} height={50} alt={coin.name} title={coin.name} />
                    </CoinIcon>
                    <div>
                        <Primary>{coin.name}</Primary>
                        <Secondary>{coin.symbol}</Secondary>
                    </div>
                </NameCol>
            </div>

            <div style={{ flex: 2 }}>
                <Primary>{'$'} {parseFloat(coin.price)}</Primary>
                <Secondary>{'$'} {parseFloat(coin.price).toFixed(2)}</Secondary>
            </div>

            <div style={{ flex: 1 }}>
              <Percent style={{ color: coin.change < 0 ? '#ef4b09' : '#66BB6A' }}>
                {coin.change}%
              </Percent>
            </div>

            <div style={{ flex: 2 }}>
                <ChartDrawing>
                    <Line data={data} options={options} width={400} height={150} />
                </ChartDrawing>
            </div>


        </div>
    </Wrapper>
    
  )
}

export default Coin


const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    & > div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
    }
`

const NameCol = styled.div`
    display: flex;
    align-items: center;
`

const CoinIcon = styled.div`
    width: 1.8rem;
    margin-right: 1rem;
`

const Primary = styled.div`
    margin-bottom: 0.1rem;
`

const Secondary = styled.div`
    color: #8a919e;
    font-size: 0.8rem;
`

const ChartDrawing = styled.div`
    width: 15rem;
    height: 100%;
`

const Percent = styled.div`
    color: #66BB6A;
    display: flex;
    align-items: center;
`