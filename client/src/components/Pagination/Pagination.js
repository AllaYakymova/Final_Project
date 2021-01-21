import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Button from '../details/Button/Button';
import { setCurrentPage } from '../../redux/paginationSlice';
import { useDispatch, useSelector } from 'react-redux';
import { productsPerPage, productsCatalog, currentPage } from '../../redux/selectors';

const Pagination = ({ filteredProd }) => {
  const prodsPerPage = useSelector(productsPerPage);
  const pageNumber = useSelector(currentPage)
  // const [pageNumber, setPageNumber] = useState(1);
  const dispatch = useDispatch();

  const totalPages = useMemo(() => Math.ceil(filteredProd.length / prodsPerPage), [filteredProd, prodsPerPage]);
  const text = useMemo(() => pageNumber + ' of ' + totalPages, [pageNumber, totalPages]);

  useEffect(() => {
    dispatch(setCurrentPage(pageNumber)); // get page number
  }, [pageNumber, dispatch]);

  const paginateBack = useCallback(() => {
    dispatch(setCurrentPage(pageNumber > 1 ? pageNumber - 1 : 1));
    // setPageNumber(pageNumber > 1 ? pageNumber - 1 : 1);
  }, [dispatch, pageNumber]);

  const paginateForward = useCallback(() => {
    dispatch(setCurrentPage(pageNumber === totalPages ? pageNumber : pageNumber + 1));
    // setPageNumber(pageNumber === totalPages ? pageNumber : pageNumber + 1);
  }, [dispatch, pageNumber, totalPages]);

  return (
    <div className="counter counter_pagination">
     <Button isBlack />

    </div>
  )
};

// Pagination.propTypes = {
// products: PropTypes.arrayOf(
//   PropTypes.shape({
//
//   }),
// ),
// paginate: PropTypes.func,
// };

export default Pagination;

// <Button paginateIncrem />
