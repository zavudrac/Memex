import React from 'react'
import {
    ModalBox,
    ModalColLeft,
    ModalColRight,
} from 'src/common-ui/components/design-library/ModalBox'
import { PrimaryAction } from 'src/common-ui/components/design-library/actions/PrimaryAction'
import { SecondaryAction } from 'src/common-ui/components/design-library/actions/SecondaryAction'
import {
    TypographyBodyBlock,
    TypographyHeadingPage,
} from 'src/common-ui/components/design-library/typography'
import { ExternalLink } from 'src/common-ui/components/design-library/actions/ExternalLink'

const titleText = 'Pair your computer with a mobile device'

export const Introduction = ({
    handleStart,
    handleBack,
}: {
    handleStart: () => void
    handleBack: () => void
}) => {
    return (
        <ModalBox
            header={titleText}
            actions={[
                <PrimaryAction
                    key={`step1-ok`}
                    label={'Ok, Got it'}
                    onClick={handleStart}
                />,
            ]}
            key={`dialog-introduction`}
        >
            <ModalColLeft>
                <TypographyHeadingPage>STEP 1</TypographyHeadingPage>
                <TypographyBodyBlock>
                    You will need to download the Memex mobile app and then make
                    sure the devices you want to pair are on the same wifi
                    connection.
                </TypographyBodyBlock>
                <TypographyBodyBlock>
                    You will be able to find Memex on Google Play and on the
                    Apple App Store.
                </TypographyBodyBlock>
            </ModalColLeft>
            <ModalColRight>
                <img src={'/img/wifiDevices.png'} />
            </ModalColRight>
        </ModalBox>
    )
}