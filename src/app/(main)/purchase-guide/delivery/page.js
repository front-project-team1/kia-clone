
export default function MainPage() { 

  return (
      <div style = {{paddingTop: '100px'}}>
        <h1 style = {{ background: '#ffffff', foreground: '#171717', fontSize: '50px', fontFamily: "Kia Signature Regulars, Arial, Helvetica, sans-serif"}}>출하</h1>
        출고 유형<hr/>
        본인출고 : 차량구입고객이 출하사무소에 내방하여 직접 차량을 인도하는 유형<hr/>
        대리인출고 : 차량구입고객의 가족, 또는 차량인도를 위임 받은 대리인이 출하사무소에 내방하여 차량을 인도하는 유형<hr/>
        출고 절차<hr/>
        Step 1 신분증 지참 출하장 내방
        Step 2 신분증 제시
        Step 3 세금계산서 발행
        Step 4 차량지정·세차·인도전 점검
        Step 5 임시번호판 부착
        Step 6 고객호명·신분증 확인
        Step 7 차량인도·차량지금품 확인·취급설명
        <h1>탁송 정보</h1>
        배달 탁송 및 출고 유형 안내<hr/>
        배달탁송 : 차량구입고객의 차량인도유형중의 하나로서 해당 탁송구간의 탁송료를 지불하고, 배달탁송사의 탁송기사가 고객이 원하는 장소까지 차량을 탁송하는 유형<hr/>
        로드탁송(Road) : 탁송기사가 차량을 운전하여 탁송하는 유형<hr/>
        장비탁송(Transporter) : 차량을 상차 할 수 있는 T/P(transporter)를 이용하여 한번에 2~4대를 싣고 운행하는 탁송 유형<hr/>
      </div>
  );
}