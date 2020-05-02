import style from './ValidateSection.module.styl'
import React, { FC, useState, useEffect, ChangeEvent } from 'react'
import { validate as validadeCPF } from '../../../lib/CPF'
// @ts-expect-error
import { IMaskInput } from 'react-imask'
import { useTranslation } from 'react-i18next'
import i18nResources from '@i18nResources'

export const ValidateSection: FC = () => {
  const { t } = useTranslation()

  const [validation, setValidation] = useState({
    tempCpf: '',
    cpf: '',
    isValid: false,
    message: '',
  })

  const { cpf, isValid, message, tempCpf } = validation

  const handleChangeCPF = ({
    currentTarget,
  }: ChangeEvent<HTMLInputElement>): void => {
    setValidation({
      ...validation,
      tempCpf: currentTarget.value,
    })
  }

  useEffect(() => {
    if (tempCpf.length === 14) {
      if (process.env.NODE_ENV === 'production') {
        import('react-ga').then((ReactGA) => {
          ReactGA.ga('send', 'event', 'Validate', 'type', 'Validate CPF')
        })
      }

      const isValid = validadeCPF(tempCpf)
      setValidation({
        ...validation,
        cpf: tempCpf,
        isValid,
        message: isValid
          ? i18nResources.messages.validCPF
          : i18nResources.messages.invalidCPF,
      })
    } else {
      setValidation({
        ...validation,
        cpf: '',
        message: tempCpf ? i18nResources.messages.incomplete : '',
      })
    }
  }, [tempCpf])

  return (
    <section className={style.validateSection}>
      <h2>{t(i18nResources.validate.title)}</h2>

      <IMaskInput
        value={tempCpf}
        onChange={handleChangeCPF}
        placeholder={t(i18nResources.validate.insertCPF)}
        className={style.validateSectionInput}
        type="text"
        mask={'000.000.000-00'}
        required
      />

      <input
        className={`${style.validateSectionInput} ${style.message} ${
          isValid && cpf ? style.messageValid : ''
        } ${!isValid && cpf ? style.messageInvalid : ''}`}
        type="text"
        placeholder="..."
        value={message}
        readOnly
      />
    </section>
  )
}
