import { expect, test } from './e2e'

test.describe('Bookings', () => {
  test('deve navegar para a página de detalhes da reserva e voltar para a lista', async ({
    page,
  }) => {
    await page.goto('/reservas', { waitUntil: 'networkidle' })

    await expect(page.getByText('Ana Souza')).toBeVisible()

    await page.getByTestId('details-button').first().click()
    await page.waitForURL('/reservas/R-00123')

    await expect(page.getByText('Informações do Passageiro')).toBeVisible()
    await expect(page.getByText('Ana Souza')).toBeVisible()

    await page.getByTestId('back-button').click()

    await page.waitForURL('/reservas')

    await expect(page.getByText('Ana Souza')).toBeVisible()
  })
})
