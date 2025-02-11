import ReactApexCharts from 'react-apexcharts';

export const App = () => {
  const options = {
    chart: {
      toolbar: {
        show: false, //툴바 숨김
        tools: {
          download: false, // 차트 다운로드 버튼 제거
        },
      },
    },
    stroke: {
      curve: 'straight', // 선의 스타일을 부드럽게 설정
      width: 2, //선 width
      colors: ['#3B82F6'], //선 색상
    },
    fill: {
      type: 'solid',
    },
    xaxis: {
      max: 6,
      categories: ['1차', '2차', '3차', '4차', '5차'], // x축 카테고리
    },
    yaxis: {
      show: true, //y축 show 유무
      min: 50000, // y축의 최소값
      max: 57000,
      tickAmount: 8, //y축의 눈금 수
    },
    tooltip: {
      enabled: true, //툴팁 보이게
      shared: true, // 여러 값들을 동시에 표시
      intersect: false, // 선과 교차하지 않도록 설정
      y: {
        formatter: (val) => `${val}`, // 툴팁에서 값을 $로 표시
      },
      x: {
        show: true,
      },
      marker: {
        show: false, // 툴팁 마커 숨기기
      },
    },
    legend: {
      //범례 : 제목 같은 것
      show: false,
      position: 'right',
    },
  };

  const series = [
    {
      name: 'Sales',
      data: [50000, 50100, 57000, 55700, 50400, 57800, 50900, 55600, 50030], // 차트에 표시될 데이터
    },
  ];

  return (
    <ReactApexCharts
      options={options}
      series={series}
      type="line" // 차트 타입 line
      height={556} //chart height
      width={1160}
    />
  );
};
