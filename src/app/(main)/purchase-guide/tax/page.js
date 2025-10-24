import styles from "./TaxStyle.module.css";

export default function TaxPage() {
  return (
    <section className={styles.taxSection}>
      <h1 className={styles.title}>세금</h1>

      {/* 구입단계 : 개별소비세, 교육세, 부가가치세 */}
      <h2 className={styles.subTitle}>구입단계 : 개별소비세, 교육세, 부가가치세</h2>
      <table className={styles.taxTable}>
        <thead>
          <tr>
            <th>세목</th>
            <th>개별소비세</th>
            <th>교육세</th>
            <th>부가가치세</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>대상</td>
            <td>
              2,000cc 이하 승용차 / 이륜자동차
              <br />
              2,000cc 초과 승용차 / 캠핑용 자동차
              <br />
              전기승용자동차
            </td>
            <td>승용차(자가용)</td>
            <td>전 차종</td>
          </tr>
          <tr>
            <td>세율</td>
            <td>
              공장도가격의 3.5%
              <br />
              ※ 개별소비세 과세표준
              <br />
              공장도 가격(반출가) - (공장도가격
              <br />
              (반출가)X기준판매비율(18%))
              <br />
              ※ 기준판매비율 적용 주기
              <br />
              '23.7월 1일부터 3년간 적용
            </td>
            <td>개별소비세의 30%</td>
            <td>과세표준액의 10%</td>
          </tr>
          <tr>
            <td>비고</td>
            <td>
              1,000cc 이하 제외
              <br />
              전기차 300만원 한도 감면
              <br />
              하이브리드차 70만원 한도 감면
            </td>
            <td>
              전기차 90만원 한도 감면
              <br />
              하이브리드차 21만원 한도 감면
            </td>
            <td> </td>
          </tr>
        </tbody>
      </table>

      {/* 등록단계 : 취득세 */}
      <h2 className={styles.subTitle}>등록단계 : 취득세</h2>
      <table className={styles.taxTable}>
        <thead>
          <tr>
            <th>대상</th>
            <th>비영업용 세율</th>
            <th>영업용 세율</th>
            <th>비고</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>경자동차</td>
            <td>4%(75만원 한도 감면)</td>
            <td>4%</td>
            <td rowSpan={3}>
              전기차 140만원 한도 감면
              <br />
              하이브리드차 40만원 한도 감면
            </td>
          </tr>
          <tr>
            <td>승용자동차</td>
            <td>7%</td>
            <td>4%</td>
          </tr>
          <tr>
            <td>그 밖의 자동차</td>
            <td>5%</td>
            <td>4%</td>
          </tr>
        </tbody>
      </table>

      {/* 소유단계 : 자동차세 */}
      <h2 className={styles.subTitle}>소유단계 : 자동차세</h2>
      <table className={styles.taxTable}>
        <thead>
          <tr>
            <th>대상</th>
            <th>비영업용 세율</th>
            <th>영업용 세율</th>
            <th>비고</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2500cc초과 승용차</td>
            <td>200원/cc</td>
            <td>24원/cc</td>
            <td rowSpan="5">
              전기차 : 100,000원/년
              <br />
              자동차세 교육세 : 자동차세의 30%
            </td>
          </tr>
          <tr>
            <td>2500cc이하 승용차</td>
            <td>200원/cc</td>
            <td>19원/cc</td>
          </tr>
          <tr>
            <td>2000cc이하 승용차</td>
            <td>200원/cc</td>
            <td>19원/cc</td>
          </tr>
          <tr>
            <td>1600cc이하 승용차</td>
            <td>140원/cc</td>
            <td>18원/cc</td>
          </tr>
          <tr>
            <td>1000cc이하 승용차</td>
            <td>80원/cc</td>
            <td>18원/cc</td>
            
          </tr>
          <tr>
            <td>10000kg이하 화물차</td>
            <td>157,500원/년</td>
            <td>45,500원/년</td>
            <td rowSpan="7">
            1만kg 초과시
            <br />① 비영업용: 적재적량 1만kg이하의 세액에 1만kg을 초과시 마다 + 3만원
            <br />② 영업용: 적재적량 1만kg이하의 세액에 1만kg을 초과시 마다 + 1만원
            </td>
          </tr>
          <tr>
            <td>8000kg이하 화물차</td>
            <td>130,500원/년</td>
            <td>36,000원/년</td>
          </tr>
          <tr>
            <td>5000kg이하 화물차</td>
            <td>79,500원/년</td>
            <td>22,500원/년</td>
          </tr>
          <tr>
            <td>4000kg이하 화물차</td>
            <td>63,000원/년</td>
            <td>18,000원/년</td>
          </tr>
          <tr>
            <td>3000kg이하 화물차</td>
            <td>48,000원/년</td>
            <td>13,500원/년</td>
          </tr>
          <tr>
            <td>2000kg이하 화물차</td>
            <td>34,500원/년</td>
            <td>9,600원/년</td>
          </tr>
          <tr>
            <td>1000kg이하 화물차</td>
            <td>28,500원/년</td>
            <td>6,600원/년</td>
          </tr>
          <tr>
            <td>고속버스</td>
            <td>-</td>
            <td>100,000원/년</td>
            <td></td>
          </tr>
          <tr>
            <td>대형전세버스</td>
            <td>-</td>
            <td>70,000원/년</td>
            <td></td>
          </tr>
          <tr>
            <td>소형전세버스</td>
            <td>-</td>
            <td>50,000원/년</td>
            <td></td>
          </tr>
          <tr>
            <td>대형일반버스</td>
            <td>115,000원/년</td>
            <td>42,000원/년</td>
            <td></td>
          </tr>
          <tr>
            <td>소형일반버스</td>
            <td>65,000원/년</td>
            <td>25,000원/년</td>
            <td></td>
          </tr>
          <tr>
            <td>대형특수자동차</td>
            <td>157,500원/년</td>
            <td>36,000원/년</td>
            <td></td>
          </tr>
          <tr>
            <td>소형특수자동차</td>
            <td>58,500원/년</td>
            <td>13,500원/년</td>
            <td></td>
          </tr>
          <tr>
            <td>삼륜이륜소형자동차</td>
            <td>18,000원/년</td>
            <td>3,300원/년</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
