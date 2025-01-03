function H_Pagination(datas, limit, index, setTotal, filter, search) {
  let filteredData = datas;
  // example: { "filter": "doctor_verificator", "value": "Dr. Budi"} return only Dr.Budi

  // ** FILTER **
  if (filter.filter && filter.value) {
    if (filter.value === "A-Z" || filter.value === "Z-A") {
      filteredData = filteredData.sort((a, b) => {
        if (filter.value === "A-Z") {
          setTotal(filteredData.length);
          return a[filter.filter] > b[filter.filter] ? 1 : -1;
        } else if (filter.value === "Z-A") {
          setTotal(filteredData.length);
          return a[filter.filter] < b[filter.filter] ? 1 : -1;
        }
        return 0;
      });
    } else if (
      filter.filter === "created" ||
      filter.filter === "updated" ||
      filter.filter === "published"
    ) {
      filteredData = filteredData.filter(
        (data) => data[filter.filter] === filter.value
      );
      setTotal(filteredData.length);
    } else if (filter.filter === "doctor_verificator") {
      filteredData = filteredData.filter(
        (data) => data.doctor_verificator.name === filter.value
      );
      setTotal(filteredData.length);
    } else if (filter.filter === "author") {
      filteredData = filteredData.filter(
        (data) => data.author === filter.value
      );
      setTotal(filteredData.length);
    } else if (filter.filter === "article_status") {
      filteredData = filteredData.filter(
        (data) => data.article_status === parseInt(filter.value)
      );
      setTotal(filteredData.length);
    } else if (filter.filter === "author") {
      filteredData = filteredData.filter(
        (data) => data.author === filter.value
      );
      setTotal(filteredData.length);
    } else if (filter.filter === "verification_status") {
      filteredData = filteredData.filter(
        (data) => data.verification_status === parseInt(filter.value)
      );
      setTotal(filteredData.length);
    }
  }

  // ** SEARCH **
  if (search.mode !== null && search.keyword !== null) {
    if (search.mode === "verification_status") {
      const verificationStatus = {
        ACCEPTED: 1,
        PENDING: 2,
        REJECTED: 3,
        REVISION: 4,
      };
      search.keyword = Object.keys(verificationStatus).find((key) =>
        key.toLowerCase().includes(search.keyword.toLowerCase())
      );
      search.keyword = verificationStatus[search.keyword.toUpperCase()];
    }

    if (search.mode === "article_status") {
      const articleStatus = {
        PUBLISHED: 1,
        UNPUBLISHED: 2,
        BANNED: 3,
        DELETED: 4,
      };
      search.keyword = Object.keys(articleStatus).find((key) =>
        key.toLowerCase().includes(search.keyword.toLowerCase())
      );
      search.keyword = articleStatus[search.keyword.toUpperCase()];
    }

    filteredData = filteredData.filter((data) => {
      const keyword = String(search.keyword).toLowerCase();
      if (search.mode === "doctor_verificator") {
        const doctorName = String(data.doctor_verificator.name).toLowerCase();
        return doctorName.includes(keyword);
      } else if (search.mode === "admin_verificator") {
        const adminName = String(data.admin_verificator.name).toLowerCase();
        return adminName.includes(keyword);
      } else {
        const value = String(data[search.mode]).toLowerCase();
        return value.includes(keyword);
      }
    });

    setTotal(filteredData.length);
  } else if (search.mode == null && search.keyword !== null) {
    // All
    filteredData = filteredData.filter((data) => {
      const keyword = String(search.keyword).toLowerCase();
      const values = Object.values(data).flatMap((value) => {
        if (typeof value === "object" && value !== null) {
          return Object.values(value).map((v) => String(v).toLowerCase());
        }
        return String(value).toLowerCase();
      });
      return values.some((value) => value.includes(keyword));
    });
  }

  const paginatedData = filteredData.slice(index * limit, (index + 1) * limit);
  setTotal(filteredData.length);

  return {
    totalPage: Math.ceil(filteredData.length / limit),
    data: paginatedData,
  };
}

export default H_Pagination;