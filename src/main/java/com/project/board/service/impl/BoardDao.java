package com.project.board.service.impl;

import com.project.board.service.BoardVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BoardDao{

    private static final String NAMESPACE = "com.project.board.service.impl.BoardDao";

    private final SqlSessionTemplate sqlSession;

    public BoardDao(SqlSessionTemplate sqlSession) {
        this.sqlSession = sqlSession;
    }

    public List<BoardVO> selectBoardList(BoardVO boardVO) {
        return sqlSession.selectList(NAMESPACE+".selectBoardList", boardVO);
    }

    public void insertBoard(BoardVO boardVO) {
        sqlSession.insert(NAMESPACE+".insertBoard", boardVO);
    }

    public void updateBoard(BoardVO boardVO) {
        sqlSession.update(NAMESPACE+".updateBoard", boardVO);
    }

    public int deleteBoard(BoardVO boardVO) {
        return sqlSession.update(NAMESPACE+".deleteBoard", boardVO);
    }
}
