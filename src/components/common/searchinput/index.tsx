import { classNames } from '@/utils';
import { Input, rem } from '@mantine/core';
import React, { ChangeEventHandler } from 'react'
import { MdSearch } from "react-icons/md";
import "./index.scss"
interface ISearchInputProps {
    placeholder: string;
    value: string;
    onChange?: ChangeEventHandler<HTMLInputElement>
    rightSection?: JSX.Element
    leftSection?: boolean
    className?: string
    size?: string;
    radius?: string
}

const SearchInput: React.FunctionComponent<ISearchInputProps> = (props) => {
    const { onChange, placeholder, value, className, leftSection, rightSection, radius, size } = props
    return (
        <Input
            placeholder={placeholder}
            variant="filled"
            aria-label='search'
            className={classNames('!mt-0 flex-1 search-input', { className: !!className })}
            radius={radius ?? "md"}
            size={size ?? "xs"}
            rightSectionPointerEvents="all"
            leftSectionPointerEvents='none'
            mt="lg"
            value={value}
            onChange={onChange}
            rightSection={rightSection}
            leftSection={leftSection ? <MdSearch style={{ width: rem(20), height: rem(20) }} /> : undefined}
        />
    )
}

export default SearchInput