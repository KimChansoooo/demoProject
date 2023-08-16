package com.project.board.controller;

import com.project.board.service.BoardService;
import com.project.board.service.BoardVO;
import jakarta.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/board")
public class BoardController {

    private static final Logger LOGGER = LoggerFactory.getLogger(BoardController.class);

    private final BoardService boardService;

    public BoardController(BoardService boardService) {
        this.boardService = boardService;
    }

    @RequestMapping(value = "/getBoardList")
    @ResponseBody
    public Map<String, Object> getBoardList(HttpServletRequest request, BoardVO boardVO) {

        Map<String, Object> resultMap = new HashMap<>();

        boardVO.setSq_user(1);
        List<BoardVO> boardList = boardService.selectBoardList(boardVO);

        resultMap.put("boardList", boardList);
        resultMap.put("totCnt", boardList.size());
        return resultMap;
    }


    /*@RequestMapping(value = "/saveBoard")
    @ResponseBody
    public Map<String, Object> saveBoard(HttpServletRequest request, @RequestParam("mode") String mode,
             @RequestBody BoardVO boardVO) {
        Map<String, Object> resultMap = new HashMap<>();

//        BoardVO boardVO = new BoardVO();
        if("add".equals(mode)) {
            boardVO.setSq_user(1);
            boardVO.setId_user("kcs");
            boardVO.setCd_board(boardVO.getCd_board());
            boardVO.setCt_board(boardVO.getCt_board());
            boardVO.setNm_board(boardVO.getNm_board());
            boardService.insertBoard(boardVO);
        } else {
            boardVO.setSq_board(Integer.parseInt(request.getParameter("sq_board")));
            boardVO.setSq_user(1);
            boardVO.setCd_board(boardVO.getCd_board());
            boardVO.setCt_board(boardVO.getCt_board());
            boardVO.setNm_board(boardVO.getNm_board());
            boardService.updateBoard(boardVO);
        }

        resultMap.put("success", true);
        return resultMap;
    }*/


    @RequestMapping(value = "/saveBoard")
    @ResponseBody
    public Map<String, Object> saveBoard(HttpServletRequest request, @RequestParam("mode") String mode,
                 @RequestParam("cd_board") String cd_board, @RequestParam("ct_board") String ct_board,
                 @RequestParam("nm_board") String nm_board) {
// , @RequestParam(value="sq_board", required=false, defaultValue="0") int sq_board
        Map<String, Object> resultMap = new HashMap<>();

        BoardVO boardVO = new BoardVO();
        if("add".equals(mode)) {
            boardVO.setSq_user(1);
            boardVO.setId_user("kcs");
            boardVO.setCd_board(cd_board);
            boardVO.setCt_board(ct_board);
            boardVO.setNm_board(nm_board);
            boardService.insertBoard(boardVO);
        } else {
            boardVO.setSq_board(Integer.parseInt(request.getParameter("sq_board")));
            boardVO.setSq_user(1);
            boardVO.setCd_board(cd_board);
            boardVO.setCt_board(ct_board);
            boardVO.setNm_board(nm_board);
            boardService.updateBoard(boardVO);
        }

        resultMap.put("success", true);
        return resultMap;
    }


    @RequestMapping(value = "/deleteBoard")
    @ResponseBody
    public Map<String, Object> deleteBoard(HttpServletRequest request, @RequestBody List<Integer> delList) {

        Map<String, Object> resultMap = new HashMap<>();

        BoardVO boardVO = new BoardVO();
        boardVO.setSq_user(1);
        boardVO.setItemList(delList);

        int deleteCnt = boardService.deleteBoard(boardVO);

        if(deleteCnt > 0) resultMap.put("success", true);
        else resultMap.put("success", false);

        return resultMap;
    }


}
