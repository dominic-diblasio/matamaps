// Updated SearchBar Component
import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ documents, setFilteredDocuments }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [beforeDate, setBeforeDate] = useState('');
    const [afterDate, setAfterDate] = useState('');
    const [showFilter, setShowFilter] = useState(false);

    // Handles text search input change
    const handleInputChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        filterDocuments(query, beforeDate, afterDate);
    };

    // Toggles filter dropdown visibility
    const handleFilterClick = () => {
        setShowFilter(!showFilter);
    };

    // Main filtering function for search and date filters
    const filterDocuments = (searchText, beforeDate, afterDate) => {
        let filtered = documents;

        if (searchText) {
            filtered = filtered.filter((doc) =>
                doc.name.toLowerCase().includes(searchText.toLowerCase())
            );
        }

        if (beforeDate) {
            const before = new Date(beforeDate);
            filtered = filtered.filter((doc) => new Date(doc.uploaded_at) <= before);
        }

        if (afterDate) {
            const after = new Date(afterDate);
            filtered = filtered.filter((doc) => new Date(doc.uploaded_at) >= after);
        }

        setFilteredDocuments(filtered);
    };

    // Applies the date filters when the button is clicked
    const applyFilter = () => {
        filterDocuments(searchQuery, beforeDate, afterDate);
        setShowFilter(false);
    };

    return (
        <div className="search-bar-container" style={{ display: 'flex', alignItems: 'center' }}>
            <input
                type="text"
                className="form-control"
                placeholder="Search documents..."
                value={searchQuery}
                onChange={handleInputChange}
                style={{ flex: 1 }}
            />
            <div className="filter-button-placeholder" style={{ marginLeft: '10px', position: 'relative' }}>
                <button className="btn btn-secondary" onClick={handleFilterClick}>
                    <i className="icofont-filter"></i>
                </button>

                {showFilter && (
                    <div className="filter-dropdown" style={{
                        position: 'absolute',
                        top: '40px',
                        right: '0',
                        backgroundColor: '#fff',
                        padding: '10px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        zIndex: 1
                    }}>
                        <div>
                            <label>Before:</label>
                            <input
                                type="date"
                                value={beforeDate}
                                onChange={(e) => setBeforeDate(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div style={{ marginTop: '10px' }}>
                            <label>After:</label>
                            <input
                                type="date"
                                value={afterDate}
                                onChange={(e) => setAfterDate(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <button
                            className="btn btn-primary"
                            style={{ marginTop: '10px' }}
                            onClick={applyFilter}
                        >
                            Apply Filter
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchBar;


// import React, { useState } from 'react';

// function SearchBar({ documents, setFilteredDocuments }) {
//     const [searchQuery, setSearchQuery] = useState('');
//     const [beforeDate, setBeforeDate] = useState('');
//     const [afterDate, setAfterDate] = useState('');
//     const [showFilter, setShowFilter] = useState(false);

//     // // Function to parse "DD-MMM-YYYY" date format
//     // const parseCustomDate = (dateStr) => {
//     //     const [day, month, year] = dateStr.split('-');
//     //     const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
//     //     const monthIndex = monthNames.indexOf(month.toUpperCase());
//     //     return new Date(year, monthIndex, day);
//     // };
//     // Function to parse "DD-MMM-YYYY" date format safely
// const parseCustomDate = (dateStr) => {
//     if (!dateStr) return new Date(NaN); // Return an invalid date if dateStr is falsy

//     const [day, month, year] = dateStr.split('-');
//     const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
//     const monthIndex = monthNames.indexOf(month.toUpperCase());

//     // Return a new Date object, or an invalid date if parsing fails
//     return monthIndex !== -1 ? new Date(year, monthIndex, day) : new Date(NaN);
// };


//     // Handles text search input change
//     const handleInputChange = (e) => {
//         const query = e.target.value;
//         setSearchQuery(query);
//         filterDocuments(query, beforeDate, afterDate);
//     };

//     // Toggles filter dropdown visibility
//     const handleFilterClick = () => {
//         setShowFilter(!showFilter);
//     };

//     // Main filtering function for search and date filters
//     const filterDocuments = (searchText, beforeDate, afterDate) => {
//         let filtered = documents;

//         if (!searchText && !beforeDate && !afterDate) {
//             setFilteredDocuments(documents); // Show all documents if no filters
//             return;
//         }

//         if (searchText) {
//             filtered = filtered.filter(doc =>
//                 doc.name.toLowerCase().includes(searchText.toLowerCase())
//             );
//         }

//         if (beforeDate) {
//             const before = new Date(beforeDate);
//             filtered = filtered.filter(doc => parseCustomDate(doc.uploadedAt) < before);
//         }

//         if (afterDate) {
//             const after = new Date(afterDate);
//             filtered = filtered.filter(doc => parseCustomDate(doc.uploadedAt) > after);
//         }

//         setFilteredDocuments(filtered);
//     };

//     // Applies the date filters when the button is clicked
//     const applyFilter = () => {
//         filterDocuments(searchQuery, beforeDate, afterDate);
//         setShowFilter(false);
//     };

//     return (
//         <div className="search-bar-container" style={{ display: 'flex', alignItems: 'center' }}>
//             <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Search documents..."
//                 value={searchQuery}
//                 onChange={handleInputChange}
//                 style={{ flex: 1 }}
//             />
//             <div className="filter-button-placeholder" style={{ marginLeft: '10px', position: 'relative' }}>
//                 <button className="btn btn-secondary" onClick={handleFilterClick}>
//                     <i className="icofont-filter"></i>
//                 </button>

//                 {showFilter && (
//                     <div className="filter-dropdown" style={{
//                         position: 'absolute',
//                         top: '40px',
//                         right: '0',
//                         backgroundColor: '#fff',
//                         padding: '10px',
//                         border: '1px solid #ccc',
//                         borderRadius: '4px',
//                         zIndex: 1
//                     }}>
//                         <div>
//                             <label>Before:</label>
//                             <input
//                                 type="date"
//                                 value={beforeDate}
//                                 onChange={(e) => setBeforeDate(e.target.value)}
//                                 className="form-control"
//                             />
//                         </div>
//                         <div style={{ marginTop: '10px' }}>
//                             <label>After:</label>
//                             <input
//                                 type="date"
//                                 value={afterDate}
//                                 onChange={(e) => setAfterDate(e.target.value)}
//                                 className="form-control"
//                             />
//                         </div>
//                         <button
//                             className="btn btn-primary"
//                             style={{ marginTop: '10px' }}
//                             onClick={applyFilter}
//                         >
//                             Apply Filter
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default SearchBar;