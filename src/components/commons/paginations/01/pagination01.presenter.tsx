import { IPagination01UI } from "../../../../../path/to/types/components/commons/types";
import { PagenationArrowsvg } from "../../../../commons/styles/Iconsvg";
import * as S from "./pagination01.styles";

const Pagination01UI = (pr: IPagination01UI) => {
  return (
    <S.Wrapper>
      <S.Page onClick={pr.onClickPrevPage}>
        <PagenationArrowsvg width="8" height="12" fill="#000" />
      </S.Page>

      {new Array(10).fill(1).map(
        (_, index) =>
          pr.startPage + index <= pr.lastPage && (
            <S.Page
              key={pr.startPage + index}
              onClick={pr.onClickPage(String(pr.startPage + index))}
              isActive={pr.startPage + index === pr.activedPage}
            >
              {pr.startPage + index}
            </S.Page>
          )
      )}

      <S.Page rotate="rotate(180deg)" onClick={pr.onClickNextPage}>
        <PagenationArrowsvg width="8" height="12" fill="#000" />
      </S.Page>
    </S.Wrapper>
  );
};

export default Pagination01UI;
