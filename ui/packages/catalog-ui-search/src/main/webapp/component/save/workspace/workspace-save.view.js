/**
 * Copyright (c) Codice Foundation
 *
 * This is free software: you can redistribute it and/or modify it under the terms of the GNU Lesser
 * General Public License as published by the Free Software Foundation, either version 3 of the
 * License, or any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without
 * even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details. A copy of the GNU Lesser General Public License
 * is distributed along with this program and can be found at
 * <http://www.gnu.org/licenses/lgpl.html>.
 *
 **/

var SaveView = require('../save.view')

module.exports = SaveView.extend({
  attributes: {
    'data-help': 'Saves the workspace.',
    title: 'Saves the workspace.',
  },
  initialize: function() {
    this.listenTo(this.model, 'change', this.handleSaved)
  },
  isSaved: function() {
    return this.model.isSaved()
  },
  triggerSave: function(e) {
    e.stopPropagation()
    this.model.save()
  },
})
