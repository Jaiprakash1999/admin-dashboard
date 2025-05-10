import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Define the types for props
type SearchInputProps = {
  inputValue: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
  name?: string;
  autoFocus?: boolean;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  className?: string;
};

const SearchInput = ({
  inputValue = "",
  placeholder = "Search",
  onChange = () => {},
  icon = <FontAwesomeIcon icon={faMagnifyingGlass} color="#6B7280" />,
  name = "",
  autoFocus = false,
  onKeyDown = () => {},
  className = "focus:outline-none text-[#2D2E33] rounded-lg ps-10 pe-2 border placeholder:text-[#A2A3A7] border-[#D1D5DB] text-sm py-2 w-full focus:border-[#2D2E33]",
}: SearchInputProps) => {
  return (
    <div className="flex items-center relative">
      <div className="absolute left-4">{icon}</div>
      <input
        value={inputValue}
        autoFocus={autoFocus}
        type="search"
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        onKeyDown={onKeyDown}
        className={className}
      />
    </div>
  );
};

export default SearchInput;
