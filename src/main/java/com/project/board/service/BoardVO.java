package com.project.board.service;

import java.util.List;

public class BoardVO {

    private int sq_user;
    private int sq_board;
    private String cd_board;
    private String nm_board;
    private String ct_board;
    private String id_user;
    private String ty_status;
    private List<Integer> itemList;
    private String searchKeyword;

    public int getSq_user() {
        return sq_user;
    }

    public void setSq_user(int sq_user) {
        this.sq_user = sq_user;
    }

    public int getSq_board() {
        return sq_board;
    }

    public void setSq_board(int sq_board) {
        this.sq_board = sq_board;
    }

    public String getCd_board() {
        return cd_board;
    }

    public void setCd_board(String cd_board) {
        this.cd_board = cd_board;
    }

    public String getNm_board() {
        return nm_board;
    }

    public void setNm_board(String nm_board) {
        this.nm_board = nm_board;
    }

    public String getCt_board() {
        return ct_board;
    }

    public void setCt_board(String ct_board) {
        this.ct_board = ct_board;
    }

    public String getId_user() {
        return id_user;
    }

    public void setId_user(String id_user) {
        this.id_user = id_user;
    }

    public String getTy_status() {
        return ty_status;
    }

    public void setTy_status(String ty_status) {
        this.ty_status = ty_status;
    }

    @Override
    public String toString() {
        return "BoardVO{" +
                "sq_user=" + sq_user +
                ", sq_board=" + sq_board +
                ", cd_board='" + cd_board + '\'' +
                ", nm_board='" + nm_board + '\'' +
                ", ct_board='" + ct_board + '\'' +
                ", id_user='" + id_user + '\'' +
                ", ty_status='" + ty_status + '\'' +
                '}';
    }

    public List<Integer> getItemList() {
        return itemList;
    }

    public void setItemList(List<Integer> itemList) {
        this.itemList = itemList;
    }

    public String getSearchKeyword() {
        return searchKeyword;
    }

    public void setSearchKeyword(String searchKeyword) {
        this.searchKeyword = searchKeyword;
    }
}
