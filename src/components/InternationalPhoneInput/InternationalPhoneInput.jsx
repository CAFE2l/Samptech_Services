import {
  AsYouType,
  getCountries,
  getCountryCallingCode,
  validatePhoneNumberLength,
} from 'libphonenumber-js'
import styles from './InternationalPhoneInput.module.css'

const regionNames = new Intl.DisplayNames(['pt-BR'], { type: 'region' })

const countries = getCountries()
  .map((country) => ({
    code: country,
    name: regionNames.of(country) || country,
    callingCode: getCountryCallingCode(country),
  }))
  .sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'))

const formatNationalPhone = (digits, country) => new AsYouType(country).input(digits)

const limitPhoneDigits = (digits, country) => {
  let limitedDigits = digits.replace(/\D/g, '')

  while (
    limitedDigits &&
    validatePhoneNumberLength(limitedDigits, country) === 'TOO_LONG'
  ) {
    limitedDigits = limitedDigits.slice(0, -1)
  }

  return limitedDigits
}

export const formatInternationalPhone = ({ country, digits }) => {
  if (!digits) return ''

  return `+${getCountryCallingCode(country)} ${formatNationalPhone(digits, country)}`
}

export const getPhoneValidationMessage = ({ country, digits }) => {
  if (!digits) return 'Informe seu telefone ou WhatsApp.'

  const validation = validatePhoneNumberLength(digits, country)

  if (validation === 'TOO_SHORT') return 'O telefone ainda está incompleto.'
  if (validation === 'TOO_LONG') return 'O telefone excede o limite permitido para este país.'
  if (validation === 'INVALID_LENGTH') return 'Confira a quantidade de dígitos do telefone.'
  if (validation === 'INVALID_COUNTRY') return 'Selecione um país válido.'

  return ''
}

export default function InternationalPhoneInput({ value, onChange, error }) {
  const handleCountryChange = (event) => {
    const country = event.target.value
    onChange({
      country,
      digits: limitPhoneDigits(value.digits, country),
    })
  }

  const handlePhoneChange = (event) => {
    onChange({
      country: value.country,
      digits: limitPhoneDigits(event.target.value, value.country),
    })
  }

  return (
    <>
      <div className={styles.phoneFields}>
        <select
          className={styles.countrySelect}
          value={value.country}
          onChange={handleCountryChange}
          aria-label="País e código telefônico"
        >
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name} (+{country.callingCode})
            </option>
          ))}
        </select>

        <input
          type="tel"
          value={formatNationalPhone(value.digits, value.country)}
          onChange={handlePhoneChange}
          inputMode="numeric"
          autoComplete="tel-national"
          placeholder="Digite apenas números"
          aria-label="Número de telefone"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? 'phone-error' : undefined}
          required
        />
      </div>

      {error && (
        <p id="phone-error" className={styles.errorMessage}>
          {error}
        </p>
      )}
    </>
  )
}
