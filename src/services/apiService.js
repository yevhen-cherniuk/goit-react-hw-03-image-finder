import axios from "axios";

const fetchImages = ({ currentPage = 1, searchQuery = "", pageSize = 12 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&per_page=${pageSize}&key=22160313-e91a771b5e7a864218f279eb9&image_type=photo&orientation=horizontal`
    )
    .then((response) => response.data.hits);
};

export default fetchImages;