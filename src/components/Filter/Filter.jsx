import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineStop } from "react-icons/ai";
import { useFilter } from "../../context/filter-context";
import { tags } from "../AddNote/AddNote";
import "./Filter.css";

const Filter = () => {
  const [isDropdownOpen, SetIsDropdownOpen] = useState(false);
  const { label, setLabel } = useFilter();
  return (
    <div className="filter_content">
      <p
        className="container heading3"
        onClick={() => SetIsDropdownOpen((isDropdownOpen) => !isDropdownOpen)}
      >
        {(!label || label === 'None') ? 'Filter': label }<IoMdArrowDropdown className="icon" />
      </p>
      {isDropdownOpen && (
        <div className="dropdown_tags dropdown_gap mt-3 p-2">
          {tags.map((tag) => (
            <div
              className="tag"
              onClick={() => {
                setLabel(tag);
                SetIsDropdownOpen(false);
              }}
            >
              {tag}
            </div>
          ))}
          <div
            className="tag"
            onClick={() => {
              setLabel("None");
              SetIsDropdownOpen(false);
            }}
          >
            <AiOutlineStop />
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
