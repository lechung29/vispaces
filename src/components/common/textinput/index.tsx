import { classNames } from '@/utils'
import { rem, TextInput, TextInputProps } from '@mantine/core'
import React, { useMemo } from 'react'
import { MdSearch } from "react-icons/md";
import "./index.scss"

export interface ITextInputProps extends TextInputProps {
    haveSearchIcon?: boolean
}

const TextInputView: React.FunctionComponent<ITextInputProps> = (props) => {
    const { className, size, radius, mt, leftSection, haveSearchIcon, ...rest } = props
    const inputLeftSection = useMemo(() => {
        return haveSearchIcon ? <MdSearch style={{ width: rem(20), height: rem(20) }} /> : leftSection
    }, [])
    return (
        <TextInput
            {...rest}
            size={size || "xs"}
            radius={radius || "md"}
            mt={mt || "lg"}
            leftSection={inputLeftSection}
            leftSectionPointerEvents='none'
            rightSectionPointerEvents='all'
            className={classNames('!mt-0 flex-1 text-input-wrapper', { className: !!className })}
        />
    )
}

export {
    TextInputView as TextInput,
}