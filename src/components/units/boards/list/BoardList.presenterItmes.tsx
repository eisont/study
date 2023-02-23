// 게시판 목록 presenter

import * as S from "./BoardList.style";
import { getDateComma } from "../../../../commons/libraries/utils";
import { IPropsPreItem } from "./BoardList.types";
import { v4 as uuidv4 } from "uuid";

const BoardListItem = (pr: IPropsPreItem) => {
  return (
    <S.Grid>
      <S.Text>{pr.index + 1}</S.Text>
      <S.Title onClick={pr.onClickMoveToBoardDetail(pr.el._id)}>
        {pr.el.title
          ?.replaceAll(String(pr.keyword), `^#$%${pr.keyword}^#$%`)
          .split("^#$%")
          .map((el: any) => (
            <S.Word key={uuidv4()} isMatched={pr.keyword === el}>
              {el}
            </S.Word>
          ))}
      </S.Title>
      <S.Text>{pr.el.writer}</S.Text>
      <S.Text>{getDateComma(pr.el.createdAt)}</S.Text>
    </S.Grid>
  );
};

export default BoardListItem;
