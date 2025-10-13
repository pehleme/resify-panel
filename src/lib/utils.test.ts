import { describe, expect, test } from 'vitest'
import { formatDate, cn } from './utils'

describe('utils', () => {
  describe('formatDate', () => {
    test('deve retornar uma data formatada', () => {
      const date = '2024-03-15T12:00:00.000Z'
      const formatted = formatDate(date)
      // Apenas verifica se a data foi formatada e contém as barras
      expect(formatted).toMatch(/\d{2}\/\d{2}\/\d{4}/)
      expect(formatted).toContain('/')
    })

    test('deve formatar data ISO completa', () => {
      const date = '2024-12-25T12:00:00'
      const formatted = formatDate(date)
      expect(formatted).toMatch(/\d{2}\/\d{2}\/\d{4}/)
    })
  })

  describe('cn', () => {
    test('deve combinar classes corretamente', () => {
      const result = cn('class1', 'class2')
      expect(result).toContain('class1')
      expect(result).toContain('class2')
    })

    test('deve remover classes duplicadas do Tailwind', () => {
      const result = cn('p-4', 'p-6')
      expect(result).toBe('p-6')
    })
  })
})
