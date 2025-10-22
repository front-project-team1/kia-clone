'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";

// --- 상수 데이터 ---
const QUICK_MENU = [
    { id: 'autoq', title: "AUTO Q 검색/예약", icon: "⚙️", href: "/service/autoq" },
    { id: 'manual', title: "사용 설명서 다운로드", icon: "📖", href: "/service/manual" },
    { id: 'update', title: "내비게이션/빌트인 캠 업데이트", icon: "🗺️", href: "/service/update" },
    { id: 'network', title: "판매 네트워크", icon: "📍", href: "/service/network" },
];

const PROCESS_STEPS = [
    { step: 1, title: "고객의 소리", icon: "💬", description: "문의 및 불편 개선 사항 발생" },
    { step: 2, title: "상담 접수", icon: "📞", description: "고객센터, 홈페이지, 모바일 등 On/Off Line 채널 접수" },
    { step: 3, title: "신속 대응 처리", icon: "⏱️", description: "처리부문 대응 요청, 고객 대응, 대응결과 회신" },
    { step: 4, title: "해결", icon: "✅", description: "고객 요구사항 조치 및 경영 정책 반영" },
];


const FAQ_LIST_WITH_ANSWERS = [
    { 
        question: "Kia Digital Key(NFC)란 무엇인가요?", 
        answer: (
            <>
                <p className="mb-2">Kia Digital Key는 NFC 안테나가 장착된 스마트폰 또는 카드 키 차량의 도어를 열고 시동을 걸 수 있는 새로운 서비스입니다.</p>
                <h5 className="font-bold my-2">Kia Digital Key NFC 카드 키</h5>
                <p className="mb-2">Kia Digital Key NFC 카드 키는 최초 1회 차량 등록 후 사용 가능하며, 도어 핸들에 폰을 대고 하여 차량에 출입하실 수 있습니다.</p>
                <p>슬립 폰, 무선 충전 패드에 카드를 거치한 뒤 차량의 시동을 걸 수 있습니다.</p>
            </>
        ) 
    },
    { 
        question: "직영 서비스센터 운영 시간은 어떻게 됩니까?", 
        answer: <p>직영 서비스센터의 운영 시간은 평일 08:30~17:30이며, 토요일, 일요일 및 공휴일은 휴무입니다. 예약 접수 마감 시간 등 자세한 사항은 고객센터를 통해 확인해 주십시오.</p> 
    },
    { 
        question: "사용 설명서 분실했는데 어떻게 재발급 받을 수 있나요?", 
        answer: <p>기아 통합 홈페이지의 [고객지원] &gt; [사용 설명서 다운로드] 메뉴에서 PDF 파일을 다운로드하실 수 있습니다. 인쇄된 실물 책자가 필요하신 경우, 고객센터(080-200-2000)로 문의해 주십시오.</p> 
    },
    { 
        question: "내 차 관리 관련 필수 앱, MyKia는 어떤 서비스인가요?", 
        answer: <p>MyKia 앱은 차량 관리, 정비 이력 확인, 멤버스 포인트 조회, 긴급 출동 서비스 요청 등 기아 고객을 위한 통합 모바일 서비스입니다.</p> 
    },
    { 
        question: "기아 멤버스 계정이 무엇인가요?", 
        answer: <p>기아 멤버스 계정은 기아의 다양한 서비스(MyKia, Kia Connect 등)를 통합하여 사용할 수 있는 하나의 아이디입니다. 멤버스 포인트 적립 및 사용, 각종 이벤트 참여 등에 활용됩니다.</p> 
    },
];

// --- 교환/환불 규정 내용 상수 ---
const REFUND_REGULATION_CONTENT = (
    <div className="text-left text-gray-700 space-y-6">
        <h4 className="text-xl font-bold mb-4">자동차 교환·환불 제도란?</h4>
        
        <p className="text-sm leading-relaxed">
            자동차 교환·환불제도는 **[자동차관리법 제47조의2]**에 의거 국내 판매한 신차를 구매 후 1년 이내(주행거리 2만km 이내)에 
            같은 증상의 중대한 하자로 인해 2회(일반하자는 3회) 이상 수리하였으나, 같은 증상이 재발할 경우 자동차 안전·하자심의위원회를 통해 제작사에 
            교환 또는 환불을 요구할 수 있는 중재 제도입니다.
        </p>
        
        <ol className="list-decimal pl-5 space-y-3 text-sm">
            <li className="font-bold text-base text-black">
                교환·환불요청 후 국토교통부령으로 정하는 사항이 프린팅 된 서면에 따라 판매된 자동차 (**2019년 1월 1일 이후 판매된 자동차**)
                <ul className="list-disc pl-5 mt-1 font-normal text-xs text-gray-600">
                    <li>*여객자동차 운수사업법, 또는 **「화물자동차 운수사업법」**에 따른 운수사업자로서 소유한 사업용 자동차가 국가 대여 대상인 자는 제외</li>
                </ul>
            </li>
            <li className="font-bold text-base text-black">
                **자동차관리법 제29조**에 따른 구조나 장치의 하자로 인하여 안전이 우려되거나 경제적 가치가 현저하게 훼손되었거나 사용이 곤란한 자동차
            </li>
            <li className="font-bold text-base text-black">
                고객에게 인도된 후 1년 이내(주행거리 2만km 이내)에 하자로 인해 다음 중 어느 하나에 해당하는 자동차
                <ul className="list-disc pl-5 mt-1 font-normal text-sm text-gray-600 space-y-2">
                    <li>
                        ① 국토교통부령으로 정하는 구조 및 원칙(원동기/동력전달장치/조향장치/제동장치 등)에서 발생한 같은 증상의 하자(**중대한 하자로 매회 수리 2회 이상** 수리하였으나, 같은 증상이 재발한 경우)
                    </li>
                    <li>
                        ② 국토교통부령으로 정하는 구조 및 원칙 외에 다른 부위에서 발생한 같은 증상의 하자(**일반 하자**를 제작사 등이 3회 이상 수리하였으나, 같은 증상이 재발한 경우)
                    </li>
                    <li>
                        ③ ① 또는 ② 이상 수리된 경우로서 누적 수리 기간이 총 30일을 초과한 경우를 포함
                    </li>
                </ul>
            </li>
            <li className="font-bold text-base text-black">
                **④ 중대한 하자로 인한 수리 1회(일반 하자는 2회)를 받은 이후,** 같은 증상의 하자가 재발한 경우로서 그 사실을 제작사 등에게 통보한 경우
                
                <p className="text-xs text-blue-600 mt-2">
                    <a href="#">하자 환불 통보 바로가기 &gt;</a>
                </p>
            </li>
        </ol>
        
        <h4 className="text-xl font-bold pt-8 mb-4">교환 환불 유의 사항</h4>
        <p className="text-sm leading-relaxed">
            교환·환불 중재 판정은 확정판결과 동일한 효력이 있으며, **'중재절차'**를 준용합니다.<br/>
            수리 소요 횟수 산정 시, **자동차관리법 제31조에 따른 제작결함 시정조치(리콜)**, 또는 같은 법 제32조의2에 따른 무상수리를 실시한 경우는 횟수 산정에서 제외됩니다.<br/>
            다만, 소비자가 하자에 인지하고 수리 기간 설정을 요청한 경우 발생한 경우는 포함됩니다.
        </p>

        <h4 className="text-xl font-bold pt-8 mb-4">교환 환불 중재 규정</h4>
        <p className="text-sm leading-relaxed">
            자동차 교환·환불 중재를 진행하기 위한 규정 **<a href="#" className="text-blue-600">중재규정 전문 보기 &gt;</a>**
        </p>

    </div>
);

// --- 컴포넌트 정의 ---

const TopBanner = () => (
    <div className="relative h-72 md:h-80 w-full overflow-hidden flex items-center justify-start">
        <img
            src="/images/FAQ.jpg" 
            alt="고객님, 무엇을 도와드릴까요?"
            className="object-cover absolute inset-0 w-full h-full" 
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex items-center px-8 md:px-20 max-w-[1400px] mx-auto w-full">
            <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tight">
                고객님,<br />무엇을 도와드릴까요?
            </h2>
        </div>
    </div>
);

const FAQSection = () => {
    // 현재 펼쳐진 FAQ 항목의 인덱스(번호)를 저장합니다.
    const [openIndex, setOpenIndex] = React.useState(null);

    // FAQ 항목을 토글하는 함수
    const toggleFAQ = (index) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <section className="py-12 bg-white">
            <div className="max-w-4xl mx-auto px-4">
                {/* 제목 및 'FAQ 더 보기' 링크 */}
                <div className="flex justify-between items-end border-b-2 border-black pb-2 mb-6">
                    <h3 className="text-xl font-bold">FAQ Top5</h3>
                    <Link href="/faq" className="text-sm text-gray-600 hover:text-black whitespace-nowrap">FAQ 더 보기 &gt;</Link>
                </div>

                {/* FAQ 목록 (아코디언 스타일) */}
                <div className="border-t border-gray-300">
                    {FAQ_LIST_WITH_ANSWERS.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={index} className="border-b border-gray-200">
                        
                                <div 
                                    className="flex justify-between items-center py-4 cursor-pointer hover:bg-gray-50 transition-colors px-2"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <p className="text-base font-semibold text-gray-800">{item.question}</p>
                              
                                    <span className={`text-2xl font-light text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                                        +
                                    </span>
                                </div>
                                
                                
                                <div 
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="px-4 text-sm text-gray-700 bg-gray-50 rounded p-4">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

const ContactInfoAndQuickMenu = () => (
    <section className="mt-8 mb-16 max-w-6xl mx-auto px-4">
        {/* 고객센터 전화번호 및 운영 시간 */}
        <div className="text-center mb-8">
            <h3 className="text-xl font-bold mb-1">고객센터 080-200-2000</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
                평일 : 08:30~18:00 (점심 12:00~13:00) | 주말, 공휴일 : 미운영<br/>
                <span className="text-xs text-gray-500">(긴급출동, 안전보안 서비스는 365일 24시간 제공)</span>
            </p>
        </div>
        
        {/* 퀵 메뉴 아이콘 목록 */}
        <div className="grid grid-cols-4 md:grid-cols-4 gap-4 max-w-lg mx-auto">
            {QUICK_MENU.map(item => (
                <Link key={item.id} href={item.href} className="bg-white p-4 rounded-lg flex flex-col items-center h-28 group border border-gray-100 hover:border-black/50 hover:bg-gray-50 transition-colors">
                    <div className="text-2xl mb-1 text-gray-700">{item.icon}</div>
                    <div className="text-xs text-gray-800 font-medium text-center">{item.title}</div>
                    <span className="mt-auto text-lg font-bold text-gray-400 group-hover:text-black transition-colors hidden">&gt;</span>
                </Link>
            ))}
        </div>
    </section>
);

const ServiceProcess = () => {
    // 탭 상태 관리: 기본값은 '고객 상담 절차'
    const [activeTab, setActiveTab] = React.useState('customerProcedure');

    const isCustomerProcedureActive = activeTab === 'customerProcedure';
    const isRefundRegulationActive = activeTab === 'refundRegulation';

    // 고객 상담 절차 내용
    const CustomerProcedureContent = (
        <div className="grid grid-cols-4 gap-8 text-center pt-8">
            {PROCESS_STEPS.map(item => (
                <div key={item.step} className="flex flex-col items-center">
                    <div className="relative mb-4">
                        <div className="text-5xl text-gray-500">{item.icon}</div>
                    </div>
                    <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-500 min-h-[40px]">{item.description}</p>
                </div>
            ))}
        </div>
    );

    return (
        <section className="py-16 bg-white border-t border-b border-gray-100">
            <div className="max-w-6xl mx-auto px-4">
                
                {/* 탭 버튼 영역 */}
                <div className="flex justify-center mx-auto max-w-lg mb-10 border-b border-gray-300">
                    
                    {/* 1. 고객 상담 절차 버튼 */}
                    <button 
                        onClick={() => setActiveTab('customerProcedure')}
                        className={`flex-1 py-3 text-lg font-semibold transition-colors 
                            ${isCustomerProcedureActive 
                                // 활성화된 경우
                                ? 'text-white bg-black border-r border-gray-700' 
                                // 비활성화된 경우
                                : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                            }`}
                    >
                        고객 상담 절차
                    </button>
                    
                    {/* 2. 교환·환불 중재규정 버튼 */}
                    <button 
                        onClick={() => setActiveTab('refundRegulation')}
                        className={`flex-1 py-3 text-lg font-semibold transition-colors 
                            ${isRefundRegulationActive 
                                // 활성화된 경우
                                ? 'text-white bg-black' 
                                // 비활성화된 경우
                                : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                            }`}
                    >
                        교환·환불 중재규정
                    </button>
                </div>

                {/* 탭 내용 영역 */}
                <div className="max-w-4xl mx-auto">
                    {activeTab === 'customerProcedure' && CustomerProcedureContent}
                    {activeTab === 'refundRegulation' && REFUND_REGULATION_CONTENT}
                </div>
                
            </div>
        </section>
    );
};


// --- 메인 페이지 컴포넌트 ---
export default function CustomerCenterContent() {
    return (
        <section className="w-full bg-white min-h-screen">
            {/* 1. 상단 배너 */}
            <TopBanner />
            
            <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
                {/* 2. 중앙 제목 */}
                <h2 className="text-2xl font-bold text-center mt-8 mb-12 p-4 inline-block relative left-1/2 -translate-x-1/2">
                    고객센터 안내
                </h2>
                
                {/* 3. FAQ Top5 섹션 */}
                <FAQSection />

                {/* 4. 고객센터 전화번호 및 퀵 메뉴 */}
                <ContactInfoAndQuickMenu />

                {/* 5. 고객 상담 절차 섹션 */}
                <ServiceProcess />
            </div>
        </section>
    );
}
