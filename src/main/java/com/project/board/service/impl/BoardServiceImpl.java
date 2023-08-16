package com.project.board.service.impl;

import com.project.board.service.BoardService;
import com.project.board.service.BoardVO;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("boardService")
public class BoardServiceImpl implements BoardService {

    private final BoardDao boardDao;

    public BoardServiceImpl(BoardDao boardDao) {
        this.boardDao = boardDao;
    }

    @Override
    public List<BoardVO> selectBoardList(BoardVO boardVO) {
        try {
            return boardDao.selectBoardList(boardVO);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public void insertBoard(BoardVO boardVO) {
        boardDao.insertBoard(boardVO);
    }

    @Override
    public void updateBoard(BoardVO boardVO) {
        boardDao.updateBoard(boardVO);
    }

    @Override
    public int deleteBoard(BoardVO boardVO) {
        return boardDao.deleteBoard(boardVO);
    }
}
