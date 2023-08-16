/********************************************************************/
/*****   TABLE NAME : 게시판 정보(IQE_BOARD)					*****/
/*****   PRIME KEY  : (SQ_USER, SQ_BOARD)						*****/
/*****   내      용 : 게시판 정보를 관리한다 	       			*****/
/*****   작  성  자 : 김찬수		                      		*****/
/*****   작  성  일 : 2023.08.07								*****/
/*****   PROJECT    : 한국공학대학교							*****/
/*****   VERSION    : 1.0										*****/
/********************************************************************/

DROP TABLE IQE_BOARD;

CREATE TABLE IQE_BOARD
(
    SQ_USER			INT(11)			NOT NULL		COMMENT'계정 일련번호',
    SQ_BOARD		INT(11)			NOT NULL		COMMENT'게시판 일련번호',
    CD_BOARD		VARCHAR(10)		DEFAULT NULL	COMMENT'게시판 번호',
    NM_BOARD		VARCHAR(50)		NOT NULL		COMMENT'게시판 제목',
    CT_BOARD		VARCHAR(500)	NOT NULL		COMMENT'게시판 내용',
    ID_USER			VARCHAR(20)	 	NOT NULL		COMMENT'등록계정',
    TY_STATUS		VARCHAR(10)		DEFAULT NULL	COMMENT'상태구분',
    PRIMARY KEY (SQ_USER, SQ_BOARD)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='게시판 정보';