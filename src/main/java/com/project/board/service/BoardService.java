package com.project.board.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service("boardService")
@Transactional
public interface BoardService {

    List<BoardVO> selectBoardList(BoardVO boardVO);

    void insertBoard(BoardVO boardVO);

    void updateBoard(BoardVO boardVO);

    int deleteBoard(BoardVO boardVO);
}
