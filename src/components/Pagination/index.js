import React from 'react'
import './index.css'

class Pagination extends React.Component {
  state = {
    pageNo: 1,
  }

  onNextPage = () => {
    const {apiCallback, totalPages} = this.props
    this.setState(
      prevState => {
        if (prevState.pageNo < totalPages) {
          return {
            pageNo: prevState.pageNo + 1,
          }
        }
        return prevState
      },
      () => {
        const {pageNo} = this.state
        apiCallback(pageNo)
      },
    )
  }

  onPrevPage = () => {
    const {apiCallback} = this.props
    this.setState(
      prevState => {
        if (prevState.pageNo > 1) {
          return {
            pageNo: prevState.pageNo - 1,
          }
        }
        return prevState
      },
      () => {
        const {pageNo} = this.state
        apiCallback(pageNo)
      },
    )
  }

  render() {
    const {pageNo} = this.state
    const {totalPages} = this.props

    return (
      <div className="mb-3 d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="control-btn"
          onClick={this.onPrevPage}
          disabled={pageNo === 1} // Disable Prev button on first page
        >
          Prev
        </button>
        <p className="page-no">
          {pageNo} of {totalPages} {/* Display current page and total pages */}
        </p>
        <button
          type="button"
          className="control-btn"
          onClick={this.onNextPage}
          disabled={pageNo === totalPages} // Disable Next button on last page
        >
          Next
        </button>
      </div>
    )
  }
}

export default Pagination
