/**
 * Created by kamiyun on 2016-05-17.
 */
Ext.define('Ehm.view.baseinfo.cardaccount.CardAccountGridModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.baseinfo_cardaccount_grid',

    stores: {
        cardAccountList : {
            autoLoad: true,
            pageSize: 30,
            config:{
                proxy: {
                    type:'ajax',
                    url:'./resources/json/cardAccountJson.json',

                    /*url:'/baseinfo/cardaccount/cardAccountList.do',*/
                    reader: {
                        type:'json',
                        rootProperty: 'cardAccountList',
                        totalProperty: 'totCnt'
                    },
                    extraParams: {
                        //ty_customer: '1', // 거래구분
                        ty_use: 'false', // 사용여부
                        searchKeyword: '', // 검색값

                        // 상세검색조건
                        nm_card_holder: '', // 소지자
                        ty_cardkind: '', // 카드종류
                        no_bank_account: ''// 결제계좌
                    }
                }
            },

            fields: [
                {name:'cd_company'}, //회사코드
                {name:'sq_card_account'}, //신용카드 일련번호
                {name:'cd_card_account'}, //카드코드
                {name:'nm_card_account'}, //카드명
                {name:'ty_cardcorp'}, //카드사
                {name:'nm_cardcorp'}, //카드사명
                {name:'no_card_account'}, //카드번호
                {name:'ty_cardtype'}, //계좌구분
                {name:'ty_cardkind'}, //카드종류
                {name:'sq_bank_account'}, //결제통장키
                {name:'nm_bank_account'}, //결제통장명
                {name:'no_bank_account'}, //계좌번호
                {name:'no_business'}, //카드사업자번호
                {name:'no_reg'}, //카드주민번호
                {name:'ty_scraping'}, //스사용구분크분사래핑
                {name:'id_cardcompany'}, //카드회사아이디
                {name:'pw_cardcompany'}, //카드회사비밀번호
                {name:'nm_card_holder'}, //카드소유자
                {name:'mn_card_limit'}, //카드한도
                {name:'mn_card_validate'}, //카드유효기간
                {name:'dd_payment'}, //카드대금청구일자
                {name:'ty_login'}, //로그인타입
                {name:'txt_additionitem'}, //추가항목
                {name:'txt_note'}, //비고
                {name:'ty_reg'}, //카드등록여부
                {name:'ty_print'}, //보고서출력여부
                {name:'cd_account'}, //계정과목코드
                {name:'nm_account'}, //계정과목명
                {name:'ty_use'}, //사용구분
                {name:'id_insert'}, //등록자id
                {name:'dt_insert'}, //등록날짜
                {name:'id_update'}, //수정자id
                {name:'dt_update'} //수정날짜

            ]
        }
    }
});