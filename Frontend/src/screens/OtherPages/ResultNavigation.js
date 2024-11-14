import React from 'react';

const ResultNavigation = ({ currentPage, totalItems, itemsPerPage, onNextPage, onPreviousPage }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    return (
        <div className="result-navigation d-flex justify-content-between align-items-center">
            <button 
                className="btn btn-secondary" 
                onClick={onPreviousPage} 
                disabled={currentPage === 1}
            >
                Previous
            </button>
            
            <span>
                Page {currentPage} of {totalPages}
            </span>

            <button 
                className="btn btn-secondary" 
                onClick={onNextPage} 
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
};

export default ResultNavigation;
