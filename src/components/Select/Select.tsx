import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { getByProperty } from '../../features/allProductsSlice';
import { getAllPropertiesOptions } from '../../helpers/api';
import { DescriptionData, PropertyType } from '../../helpers/types';
import { SortByPriceParams } from '../../pages/CatalogPage';
import './Select.scss';


type Props = {
  label: string,
  property?: PropertyType,
  searchName?: string,
  setFiltersUsed: (v: boolean) => void,
  propertyList?: any[],
  setSortByPrice?: (v: SortByPriceParams) => void,

};

export const Select: React.FC<Props> = ({
  label, property, searchName,
  setFiltersUsed,
  propertyList, setSortByPrice
}) => {
  const dropdown = useRef<HTMLUListElement>(null);
  const selectBtnIcon = useRef<HTMLButtonElement>(null);
  const dispatch = useAppDispatch();
  const [properties, setProperties] = useState<DescriptionData[]>([])
  const [active, setActive] = useState('');

  useEffect(() => {
    if (searchName) {
      getAllPropertiesOptions(searchName)
        .then(setProperties);
    }
  }, [])

  const onSelect = (value: any) => {
    setActive(value);
    if (searchName && property) {
      dispatch(getByProperty({ id: value, propertyType: property }));
    }
    if (setSortByPrice) {
      setSortByPrice(value)
    }
    if (propertyList) {
      setFiltersUsed(false);
    } else {
      setFiltersUsed(true)
    }
  }

  const onSelectBtnBlur = () => {
    if (dropdown) {
      dropdown.current?.classList.remove('select__dropdown--visible');
    }

    if (selectBtnIcon) {
      selectBtnIcon.current?.classList.remove('select__icon--active');
    }
  };

  const onSelectBtnClick = () => {
    if (dropdown) {
      dropdown.current?.classList.toggle('select__dropdown--visible');
    }

    if (selectBtnIcon) {
      selectBtnIcon.current?.classList.toggle('select__icon--active');
    }
  };

  return (
    <div className="select__wrapper">
      <button
        type="button"
        aria-label="select-button"
        name="sortBy"
        id="sortBy"
        className="select__button"
        onClick={onSelectBtnClick}
        onBlur={onSelectBtnBlur}
      >
        {label}
        <span
          className="select__icon"
          ref={selectBtnIcon}
        ></span>
      </button>
      <ul className="select__dropdown" ref={dropdown}>
        {searchName
          ? (
            <>
              {properties.map(prop => (
                <li key={prop.id} className="select__li">
                  <button
                    type="button"
                    className={classNames(
                      "select__option",
                      { "select__option--active": +prop.id === +active }
                    )}
                    onMouseDown={() => onSelect(prop.id)}
                  >
                    {prop.name}
                  </button>
                </li>
              ))}
            </>
          )
          : (
            <>
              {propertyList?.slice(1).map(prop => (
                <li key={prop[0]} className="select__li">
                  <button
                    type="button"
                    className={classNames(
                      "select__option",
                      { "select__option--active": prop[1] === active }
                    )}
                    onMouseDown={() => onSelect(prop[1])}
                  >
                    {prop[0]}
                  </button>
                </li>
              ))}
            </>
          )}
      </ul>
    </div>
  );
};
