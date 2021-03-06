import security from "../lib/security"
import CheckoutFieldsService from "../services/settings/checkoutFields"
import CommerceSettingsService from "../services/settings/commerce"
import EmailSettingsService from "../services/settings/email"
import EmailTemplatesService from "../services/settings/emailTemplates"
import ImportSettingsService from "../services/settings/import"
import SettingsService from "../services/settings/settings"

class SettingsRoute {
  router: any
  constructor(router) {
    this.router = router
    this.registerRoutes()
  }

  registerRoutes() {
    this.router.get(
      "/v1/settings",
      security.checkUserScope.bind(this, security.scope.READ_SETTINGS),
      this.getSettings.bind(this)
    )
    this.router.put(
      "/v1/settings",
      security.checkUserScope.bind(this, security.scope.WRITE_SETTINGS),
      this.updateSettings.bind(this)
    )
    this.router.get(
      "/v1/settings/email",
      security.checkUserScope.bind(this, security.scope.READ_SETTINGS),
      this.getEmailSettings.bind(this)
    )
    this.router.put(
      "/v1/settings/email",
      security.checkUserScope.bind(this, security.scope.WRITE_SETTINGS),
      this.updateEmailSettings.bind(this)
    )
    this.router.get(
      "/v1/settings/import",
      security.checkUserScope.bind(this, security.scope.READ_SETTINGS),
      this.getImportSettings.bind(this)
    )
    this.router.put(
      "/v1/settings/import",
      security.checkUserScope.bind(this, security.scope.WRITE_SETTINGS),
      this.updateImportSettings.bind(this)
    )
    this.router.get(
      "/v1/settings/commerceform",
      security.checkUserScope.bind(this, security.scope.READ_SETTINGS),
      this.retrieveCommerceSettings.bind(this)
    )
    this.router.put(
      "/v1/settings/commerceform",
      security.checkUserScope.bind(this, security.scope.WRITE_SETTINGS),
      this.updateCommerceSettings.bind(this)
    )
    this.router.get(
      "/v1/settings/email/templates/:name",
      security.checkUserScope.bind(this, security.scope.READ_SETTINGS),
      this.getEmailTemplate.bind(this)
    )
    this.router.put(
      "/v1/settings/email/templates/:name",
      security.checkUserScope.bind(this, security.scope.WRITE_SETTINGS),
      this.updateEmailTemplate.bind(this)
    )
    this.router.get(
      "/v1/settings/checkout/fields",
      security.checkUserScope.bind(this, security.scope.READ_SETTINGS),
      this.getCheckoutFields.bind(this)
    )
    this.router.get(
      "/v1/settings/checkout/fields/:name",
      security.checkUserScope.bind(this, security.scope.READ_SETTINGS),
      this.getCheckoutField.bind(this)
    )
    this.router.put(
      "/v1/settings/checkout/fields/:name",
      security.checkUserScope.bind(this, security.scope.WRITE_SETTINGS),
      this.updateCheckoutField.bind(this)
    )
    this.router.post(
      "/v1/settings/logo",
      security.checkUserScope.bind(this, security.scope.WRITE_SETTINGS),
      this.uploadLogo.bind(this)
    )
    this.router.delete(
      "/v1/settings/logo",
      security.checkUserScope.bind(this, security.scope.WRITE_SETTINGS),
      this.deleteLogo.bind(this)
    )
  }

  getSettings(req, res, next) {
    SettingsService.getSettings()
      .then(data => {
        res.send(data)
      })
      .catch(next)
  }

  updateSettings(req, res, next) {
    SettingsService.updateSettings(req.body)
      .then(data => {
        if (data) {
          res.send(data)
        } else {
          res.status(404).end()
        }
      })
      .catch(next)
  }

  getEmailSettings(req, res, next) {
    EmailSettingsService.getEmailSettings()
      .then(data => {
        res.send(data)
      })
      .catch(next)
  }

  updateEmailSettings(req, res, next) {
    EmailSettingsService.updateEmailSettings(req.body)
      .then(data => {
        if (data) {
          res.send(data)
        } else {
          res.status(404).end()
        }
      })
      .catch(next)
  }

  getImportSettings(req, res, next) {
    ImportSettingsService.getImportSettings()
      .then(data => {
        res.send(data)
      })
      .catch(next)
  }

  updateImportSettings(req, res, next) {
    ImportSettingsService.updateImportSettings(req.body)
      .then(data => {
        if (data) {
          res.send(data)
        } else {
          res.status(404).end()
        }
      })
      .catch(next)
  }

  retrieveCommerceSettings(req, res, next) {
    CommerceSettingsService.retrieveCommerceSettings()
      .then(data => {
        res.send(data)
      })
      .catch(next)
  }

  updateCommerceSettings(req, res, next) {
    CommerceSettingsService.updateCommerceSettings(req.body)
      .then(data => {
        if (data) {
          res.send(data)
        } else {
          res.status(404).end()
        }
      })
      .catch(next)
  }

  getEmailTemplate(req, res, next) {
    EmailTemplatesService.getEmailTemplate(req.params.name)
      .then(data => {
        res.send(data)
      })
      .catch(next)
  }

  updateEmailTemplate(req, res, next) {
    EmailTemplatesService.updateEmailTemplate(req.params.name, req.body)
      .then(data => {
        if (data) {
          res.send(data)
        } else {
          res.status(404).end()
        }
      })
      .catch(next)
  }

  getCheckoutFields(req, res, next) {
    CheckoutFieldsService.getCheckoutFields()
      .then(data => {
        res.send(data)
      })
      .catch(next)
  }

  getCheckoutField(req, res, next) {
    CheckoutFieldsService.getCheckoutField(req.params.name)
      .then(data => {
        res.send(data)
      })
      .catch(next)
  }

  updateCheckoutField(req, res, next) {
    CheckoutFieldsService.updateCheckoutField(req.params.name, req.body)
      .then(data => {
        if (data) {
          res.send(data)
        } else {
          res.status(404).end()
        }
      })
      .catch(next)
  }

  uploadLogo(req, res, next) {
    SettingsService.uploadLogo(req, res, next)
  }

  deleteLogo(req, res, next) {
    SettingsService.deleteLogo().then(() => {
      res.end()
    })
  }
}

export default SettingsRoute
