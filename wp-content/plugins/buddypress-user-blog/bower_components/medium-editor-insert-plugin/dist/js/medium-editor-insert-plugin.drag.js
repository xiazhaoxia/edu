this.MediumInsert = this.MediumInsert || {}, this.MediumInsert.Templates = this.MediumInsert.Templates || {}, this.MediumInsert.Templates["src/js/templates/core-buttons.hbs"] = Handlebars.template(
    {
        1: function(a, b, c, d, e) {
            var f, g, h = null != b ? b : {},
                i = c.helperMissing,
                j = "function";
            return '            <li><a data-addon="' + a.escapeExpression((g = null != (g = c.key || e && e.key) ? g : i, typeof g === j ? g.call(h, {
                name: "key",
                hash: {},
                data: e
            }) : g)) + '" data-action="add" class="medium-insert-action">' + (null != (g = null != (g = c.label || (null != b ? b.label : b)) ? g : i, f = typeof g === j ? g.call(h, {
                name: "label",
                hash: {},
                data: e
            }) : g) ? f : "") + "</a></li>\n"
        },
        compiler: [7, ">= 4.0.0"],
        main: function(a, b, c, d, e) {
            var f;
            return '<div class="medium-insert-buttons" contenteditable="false" style="display: none">\n    <a class="medium-insert-buttons-show">+</a>\n    <ul class="medium-insert-buttons-addons" style="display: none">\n' + (null != (f = c.each.call(null != b ? b : {}, null != b ? b.addons : b, {
                name: "each",
                hash: {},
                fn: a.program(1, e, 0),
                inverse: a.noop,
                data: e
            })) ? f : "") + "    </ul>\n</div>\n"
        },
        useData: !0
    }), this.MediumInsert.Templates["src/js/templates/core-caption.hbs"] = Handlebars.template({
        compiler: [7, ">= 4.0.0"],
        main: function(a, b, c, d, e) {
            var f;
            return '<figcaption contenteditable="true" class="medium-insert-caption-placeholder" data-placeholder="' + a.escapeExpression((f = null != (f = c.placeholder || (null != b ? b.placeholder : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : {}, {
                name: "placeholder",
                hash: {},
                data: e
            }) : f)) + '"></figcaption>'
        },
        useData: !0
    }), this.MediumInsert.Templates["src/js/templates/core-empty-line.hbs"] = Handlebars.template({
        compiler: [7, ">= 4.0.0"],
        main: function(a, b, c, d, e) {
            return "<p><br></p>\n"
        },
        useData: !0
    }), this.MediumInsert.Templates["src/js/templates/embeds-toolbar.hbs"] = Handlebars.template({
        1: function(a, b, c, d, e) {
            var f;
            return '    <div class="medium-insert-embeds-toolbar medium-editor-toolbar medium-toolbar-arrow-under medium-editor-toolbar-active">\n        <ul class="medium-editor-toolbar-actions clearfix">\n' + (null != (f = c.each.call(null != b ? b : {}, null != b ? b.styles : b, {
                name: "each",
                hash: {},
                fn: a.program(2, e, 0),
                inverse: a.noop,
                data: e
            })) ? f : "") + "        </ul>\n    </div>\n"
        },
        2: function(a, b, c, d, e) {
            var f;
            return null != (f = c["if"].call(null != b ? b : {}, null != b ? b.label : b, {
                name: "if",
                hash: {},
                fn: a.program(3, e, 0),
                inverse: a.noop,
                data: e
            })) ? f : ""
        },
        3: function(a, b, c, d, e) {
            var f, g, h = null != b ? b : {},
                i = c.helperMissing,
                j = "function";
            return '                    <li>\n                        <button class="medium-editor-action" data-action="' + a.escapeExpression((g = null != (g = c.key || e && e.key) ? g : i, typeof g === j ? g.call(h, {
                name: "key",
                hash: {},
                data: e
            }) : g)) + '">' + (null != (g = null != (g = c.label || (null != b ? b.label : b)) ? g : i, f = typeof g === j ? g.call(h, {
                name: "label",
                hash: {},
                data: e
            }) : g) ? f : "") + "</button>\n                    </li>\n"
        },
        5: function(a, b, c, d, e) {
            var f;
            return '    <div class="medium-insert-embeds-toolbar2 medium-editor-toolbar medium-editor-toolbar-active">\n        <ul class="medium-editor-toolbar-actions clearfix">\n' + (null != (f = c.each.call(null != b ? b : {}, null != b ? b.actions : b, {
                name: "each",
                hash: {},
                fn: a.program(2, e, 0),
                inverse: a.noop,
                data: e
            })) ? f : "") + "        </ul>\n    </div>\n"
        },
        compiler: [7, ">= 4.0.0"],
        main: function(a, b, c, d, e) {
            var f, g = null != b ? b : {};
            return (null != (f = c["if"].call(g, null != b ? b.styles : b, {
                name: "if",
                hash: {},
                fn: a.program(1, e, 0),
                inverse: a.noop,
                data: e
            })) ? f : "") + "\n" + (null != (f = c["if"].call(g, null != b ? b.actions : b, {
                name: "if",
                hash: {},
                fn: a.program(5, e, 0),
                inverse: a.noop,
                data: e
            })) ? f : "")
        },
        useData: !0
    }), this.MediumInsert.Templates["src/js/templates/embeds-wrapper.hbs"] = Handlebars.template({
        compiler: [7, ">= 4.0.0"],
        main: function(a, b, c, d, e) {
            var f, g;
            return '<div class="medium-insert-embeds" contenteditable="false">\n	<figure>\n		<div class="medium-insert-embed">\n			' + (null != (g = null != (g = c.html || (null != b ? b.html : b)) ? g : c.helperMissing, f = "function" == typeof g ? g.call(null != b ? b : {}, {
                name: "html",
                hash: {},
                data: e
            }) : g) ? f : "") + '\n		</div>\n	</figure>\n	<div class="medium-insert-embeds-overlay"></div>\n</div>'
        },
        useData: !0
    }), this.MediumInsert.Templates["src/js/templates/images-fileupload.hbs"] = Handlebars.template({
        compiler: [7, ">= 4.0.0"],
        main: function(a, b, c, d, e) {
            return '<input type="file" multiple>'
        },
        useData: !0
    }), this.MediumInsert.Templates["src/js/templates/images-image.hbs"] = Handlebars.template({
        1: function(a, b, c, d, e) {
            return '        <div class="medium-insert-images-progress"></div>\n'
        },
        compiler: [7, ">= 4.0.0"],
        main: function(a, b, c, d, e) {
            var f, g, h = null != b ? b : {};
            return '<figure contenteditable="false">\n    <img src="' + a.escapeExpression((g = null != (g = c.img || (null != b ? b.img : b)) ? g : c.helperMissing, "function" == typeof g ? g.call(h, {
                name: "img",
                hash: {},
                data: e
            }) : g)) + '" alt="" />\n' + (null != (f = c["if"].call(h, null != b ? b.progress : b, {
                name: "if",
                hash: {},
                fn: a.program(1, e, 0),
                inverse: a.noop,
                data: e
            })) ? f : "") + "</figure>\n"
        },
        useData: !0
    }), this.MediumInsert.Templates["src/js/templates/images-progressbar.hbs"] = Handlebars.template({
        compiler: [7, ">= 4.0.0"],
        main: function(a, b, c, d, e) {
            return '<progress min="0" max="100" value="0">0</progress>'
        },
        useData: !0
    }), this.MediumInsert.Templates["src/js/templates/images-toolbar.hbs"] = Handlebars.template({
        1: function(a, b, c, d, e) {
            var f;
            return null != (f = c["if"].call(null != b ? b : {}, null != b ? b.label : b, {
                name: "if",
                hash: {},
                fn: a.program(2, e, 0),
                inverse: a.noop,
                data: e
            })) ? f : ""
        },
        2: function(a, b, c, d, e) {
            var f, g, h = null != b ? b : {},
                i = c.helperMissing,
                j = "function";
            return '                <li>\n                    <button class="medium-editor-action" data-action="' + a.escapeExpression((g = null != (g = c.key || e && e.key) ? g : i, typeof g === j ? g.call(h, {
                name: "key",
                hash: {},
                data: e
            }) : g)) + '">' + (null != (g = null != (g = c.label || (null != b ? b.label : b)) ? g : i, f = typeof g === j ? g.call(h, {
                name: "label",
                hash: {},
                data: e
            }) : g) ? f : "") + "</button>\n                </li>\n"
        },
        4: function(a, b, c, d, e) {
            var f;
            return '	<div class="medium-insert-images-toolbar2 medium-editor-toolbar medium-editor-toolbar-active">\n		<ul class="medium-editor-toolbar-actions clearfix">\n' + (null != (f = c.each.call(null != b ? b : {}, null != b ? b.actions : b, {
                name: "each",
                hash: {},
                fn: a.program(5, e, 0),
                inverse: a.noop,
                data: e
            })) ? f : "") + "    	</ul>\n    </div>\n"
        },
        5: function(a, b, c, d, e) {
            var f;
            return null != (f = c["if"].call(null != b ? b : {}, null != b ? b.label : b, {
                name: "if",
                hash: {},
                fn: a.program(6, e, 0),
                inverse: a.noop,
                data: e
            })) ? f : ""
        },
        6: function(a, b, c, d, e) {
            var f, g, h = null != b ? b : {},
                i = c.helperMissing,
                j = "function";
            return '        	        <li>\n        	            <button class="medium-editor-action" data-action="' + a.escapeExpression((g = null != (g = c.key || e && e.key) ? g : i, typeof g === j ? g.call(h, {
                name: "key",
                hash: {},
                data: e
            }) : g)) + '">' + (null != (g = null != (g = c.label || (null != b ? b.label : b)) ? g : i, f = typeof g === j ? g.call(h, {
                name: "label",
                hash: {},
                data: e
            }) : g) ? f : "") + "</button>\n        	        </li>\n"
        },
        compiler: [7, ">= 4.0.0"],
        main: function(a, b, c, d, e) {
            var f, g = null != b ? b : {};
            return '<div class="medium-insert-images-toolbar medium-editor-toolbar medium-toolbar-arrow-under medium-editor-toolbar-active">\n    <ul class="medium-editor-toolbar-actions clearfix">\n' + (null != (f = c.each.call(g, null != b ? b.styles : b, {
                name: "each",
                hash: {},
                fn: a.program(1, e, 0),
                inverse: a.noop,
                data: e
            })) ? f : "") + "    </ul>\n</div>\n\n" + (null != (f = c["if"].call(g, null != b ? b.actions : b, {
                name: "if",
                hash: {},
                fn: a.program(4, e, 0),
                inverse: a.noop,
                data: e
            })) ? f : "")
        },
        useData: !0
    }),
    function(a, b, c, d) {
        "use strict";

        function e(a) {
            return a.charAt(0).toUpperCase() + a.slice(1)
        }

        function f(c, e) {
            var f;
            this.el = c, this.$el = a(c), this.templates = b.MediumInsert.Templates, e && (f = e.editor, e.editor = null), this.options = a.extend(!0, {}, h, e), this.options.editor = f, this._defaults = h, this._name = g, this.options && this.options.editor && (this.options.editor._serialize = this.options.editor.serialize, this.options.editor._destroy = this.options.editor.destroy, this.options.editor._setup = this.options.editor.setup, this.options.editor._hideInsertButtons = this.hideButtons, this.options.editor.serialize = this.editorSerialize, this.options.editor.destroy = this.editorDestroy, this.options.editor.setup = this.editorSetup, this.options.editor.getExtensionByName("placeholder") !== d && (this.options.editor.getExtensionByName("placeholder").updatePlaceholder = this.editorUpdatePlaceholder))
        }
        var g = "mediumInsert",
            h = {
                editor: null,
                enabled: !0,
                addons: {
                    images: !0,
                    embeds: !0
                }
            };
        f.prototype.init = function() {
            this.$el.addClass("medium-editor-insert-plugin"), ("object" != typeof this.options.addons || 0 === Object.keys(this.options.addons).length) && this.disable(), this.initAddons(), this.clean(), this.events()
        }, f.prototype.events = function() {
            var c = this;
            this.$el.on("dragover drop", function(a) {
                a.preventDefault()
            }).on("keyup click", a.proxy(this, "toggleButtons")).on("selectstart mousedown", ".medium-insert, .medium-insert-buttons", a.proxy(this, "disableSelection")).on("click", ".medium-insert-buttons-show", a.proxy(this, "toggleAddons")).on("click", ".medium-insert-action", a.proxy(this, "addonAction")).on("paste", ".medium-insert-caption-placeholder", function(b) {
                a.proxy(c, "removeCaptionPlaceholder")(a(b.target))
            }), a(b).on("resize", a.proxy(this, "positionButtons", null))
        }, f.prototype.getEditor = function() {
            return this.options.editor
        }, f.prototype.editorSerialize = function() {
            var b = this._serialize();
            return a.each(b, function(c) {
                var d = a("<div />").html(b[c].value);
                d.find(".medium-insert-buttons").remove(), d.find("[data-embed-code]").each(function() {
                    var b = a(this);
                    b.html(b.attr("data-embed-code"))
                }), b[c].value = d.html()
            }), b
        }, f.prototype.editorDestroy = function() {
            a.each(this.elements, function(b, c) {
                a(c).data("plugin_" + g).disable()
            }), this._destroy()
        }, f.prototype.editorSetup = function() {
            this._setup(), a.each(this.elements, function(b, c) {
                a(c).data("plugin_" + g).enable()
            })
        }, f.prototype.editorUpdatePlaceholder = function(b, c) {
            var d = a(b).children().not(".medium-insert-buttons").contents();
            c || 1 !== d.length || "br" !== d[0].nodeName.toLowerCase() ? this.hidePlaceholder(b) : (this.showPlaceholder(b), this.base._hideInsertButtons(a(b)))
        }, f.prototype.triggerInput = function() {
            this.getEditor() && this.getEditor().trigger("editableInput", null, this.el)
        }, f.prototype.deselect = function() {
            c.getSelection().removeAllRanges()
        }, f.prototype.disable = function() {
            this.options.enabled = !1, this.$el.find(".medium-insert-buttons").addClass("hide")
        }, f.prototype.enable = function() {
            this.options.enabled = !0, this.$el.find(".medium-insert-buttons").removeClass("hide")
        }, f.prototype.disableSelection = function(b) {
            var c = a(b.target);
            (c.is("img") === !1 || c.hasClass("medium-insert-buttons-show")) && b.preventDefault()
        }, f.prototype.initAddons = function() {
            var b = this;
            this.options.addons && 0 !== this.options.addons.length && a.each(this.options.addons, function(a, c) {
                var d = g + e(a);
                return c === !1 ? void delete b.options.addons[a] : (b.$el[d](c), void(b.options.addons[a] = b.$el.data("plugin_" + d).options))
            })
        }, f.prototype.clean = function() {
            var b, c, d, e = this;
            this.options.enabled !== !1 && (0 === this.$el.children().length && this.$el.html(this.templates["src/js/templates/core-empty-line.hbs"]().trim()), d = this.$el.contents().filter(function() {
                return "#text" === this.nodeName && "" !== a.trim(a(this).text()) || "br" === this.nodeName.toLowerCase()
            }), d.each(function() {
                a(this).wrap("<p />"), e.moveCaret(a(this).parent(), a(this).text().length)
            }), this.addButtons(), b = this.$el.find(".medium-insert-buttons"), c = b.prev(), c.attr("class") && c.attr("class").match(/medium\-insert(?!\-active)/) && b.before(this.templates["src/js/templates/core-empty-line.hbs"]().trim()))
        }, f.prototype.getButtons = function() {
            return this.options.enabled !== !1 ? this.templates["src/js/templates/core-buttons.hbs"]({
                addons: this.options.addons
            }).trim() : void 0
        }, f.prototype.addButtons = function() {
            0 === this.$el.find(".medium-insert-buttons").length && this.$el.append(this.getButtons())
        }, f.prototype.toggleButtons = function(c) {
            var d, e, f, g, h = a(c.target),
                i = b.getSelection(),
                j = this;
            this.options.enabled !== !1 && (i && 0 !== i.rangeCount ? (d = i.getRangeAt(0), e = a(d.commonAncestorContainer)) : e = h, e.hasClass("medium-editor-insert-plugin") && (e = e.find("p:first")), f = e.is("p") ? e : e.closest("p"), this.clean(), h.hasClass("medium-editor-placeholder") === !1 && 0 === h.closest(".medium-insert-buttons").length && 0 === e.closest(".medium-insert-buttons").length && (this.$el.find(".medium-insert-active").removeClass("medium-insert-active"), a.each(this.options.addons, function(a) {
                return h.closest(".medium-insert-" + a).length && (e = h), e.closest(".medium-insert-" + a).length ? (f = e.closest(".medium-insert-" + a), void(g = a)) : void 0
            }), f.length && ("" === f.text().trim() && !g || "images" === g) ? (f.addClass("medium-insert-active"), setTimeout(function() {
                j.positionButtons(g), j.showButtons(g)
            }, g ? 100 : 0)) : this.hideButtons()))
        }, f.prototype.showButtons = function(a) {
            var b = this.$el.find(".medium-insert-buttons");
            b.show(), b.find("li").show(), a && (b.find("li").hide(), b.find('a[data-addon="' + a + '"]').parent().show())
        }, f.prototype.hideButtons = function(a) {
            a = a || this.$el, a.find(".medium-insert-buttons").hide(), a.find(".medium-insert-buttons-addons").hide(), a.find(".medium-insert-buttons-show").removeClass("medium-insert-buttons-rotate")
        }, f.prototype.positionButtons = function(a) {
            var b, c, d = this.$el.find(".medium-insert-buttons"),
                e = this.$el.find(".medium-insert-active"),
                f = e.find("figure:first").length ? e.find("figure:first") : e;
            e.length && (b = e.position().left - parseInt(d.find(".medium-insert-buttons-addons").css("left"), 10) - parseInt(d.find(".medium-insert-buttons-addons a:first").css("margin-left"), 10), b = 0 > b ? e.position().left : b, c = e.position().top + parseInt(e.css("margin-top"), 10), a && (e.position().left !== f.position().left && (b = f.position().left), c += e.height() + 15), d.css({
                left: b,
                top: c
            }))
        }, f.prototype.toggleAddons = function() {
            this.$el.find(".medium-insert-buttons-addons").fadeToggle(), this.$el.find(".medium-insert-buttons-show").toggleClass("medium-insert-buttons-rotate")
        }, f.prototype.hideAddons = function() {
            this.$el.find(".medium-insert-buttons-addons").hide(), this.$el.find(".medium-insert-buttons-show").removeClass("medium-insert-buttons-rotate")
        }, f.prototype.addonAction = function(b) {
            var c = a(b.target).is("a") ? a(b.target) : a(b.target).closest("a"),
                d = c.data("addon"),
                f = c.data("action");
            this.$el.data("plugin_" + g + e(d))[f]()
        }, f.prototype.moveCaret = function(a, d) {
            var e, f, g;
            if (d = d || 0, e = c.createRange(), f = b.getSelection(), g = a.get(0), !g.childNodes.length) {
                var h = c.createTextNode(" ");
                g.appendChild(h)
            }
            e.setStart(g.childNodes[0], d), e.collapse(!0), f.removeAllRanges(), f.addRange(e)
        }, f.prototype.addCaption = function(a, b) {
            var c = a.find("figcaption");
            0 === c.length && a.append(this.templates["src/js/templates/core-caption.hbs"]({
                placeholder: b
            }))
        }, f.prototype.removeCaptions = function(b) {
            var c = this.$el.find("figcaption");
            b && (c = c.not(b)), c.each(function() {
                (a(this).hasClass("medium-insert-caption-placeholder") || "" === a(this).text().trim()) && a(this).remove()
            })
        }, f.prototype.removeCaptionPlaceholder = function(a) {
            var b = a.is("figcaption") ? a : a.find("figcaption");
            b.length && b.removeClass("medium-insert-caption-placeholder").removeAttr("data-placeholder")
        }, a.fn[g] = function(b) {
            return this.each(function() {
                var c, d = this;
                a(d).is("textarea") && (c = a(d).attr("medium-editor-textarea-id"), d = a(d).siblings('[medium-editor-textarea-id="' + c + '"]').get(0)), a.data(d, "plugin_" + g) ? "string" == typeof b && a.data(d, "plugin_" + g)[b] && a.data(d, "plugin_" + g)[b]() : (a.data(d, "plugin_" + g, new f(d, b)), a.data(d, "plugin_" + g).init())
            })
        }
    }(jQuery, window, document),
    function(a, b, c, d) {
        "use strict";

        function e(c, d) {
            this.el = c, this.$el = a(c), this.templates = b.MediumInsert.Templates, this.core = this.$el.data("plugin_" + f), this.options = a.extend(!0, {}, h, d), this._defaults = h, this._name = f, this.core.getEditor() && (this.core.getEditor()._serializePreEmbeds = this.core.getEditor().serialize, this.core.getEditor().serialize = this.editorSerialize), this.init()
        }
        var f = "mediumInsert",
            g = "Embeds",
            h = {
                label: '<span class="fa fa-youtube-play"></span>',
                placeholder: "Paste a YouTube, Vimeo, Facebook, Twitter or Instagram link and press Enter",
                oembedProxy: "http://medium.iframe.ly/api/oembed?iframe=1",
                captions: !0,
                captionPlaceholder: "Type caption (optional)",
                styles: {
                    wide: {
                        label: '<span class="fa fa-align-justify"></span>'
                    },
                    left: {
                        label: '<span class="fa fa-align-left"></span>'
                    },
                    right: {
                        label: '<span class="fa fa-align-right"></span>'
                    }
                },
                actions: {
                    remove: {
                        label: '<span class="fa fa-times"></span>',
                        clicked: function() {
                            var b = a.Event("keydown");
                            b.which = 8, a(c).trigger(b)
                        }
                    }
                }
            };
        e.prototype.init = function() {
            var b = this.$el.find(".medium-insert-embeds");
            b.attr("contenteditable", !1), b.each(function() {
                0 === a(this).find(".medium-insert-embeds-overlay").length && a(this).append(a("<div />").addClass("medium-insert-embeds-overlay"))
            }), this.events(), this.backwardsCompatibility()
        }, e.prototype.events = function() {
            a(c).on("click", a.proxy(this, "unselectEmbed")).on("keydown", a.proxy(this, "removeEmbed")).on("click", ".medium-insert-embeds-toolbar .medium-editor-action", a.proxy(this, "toolbarAction")).on("click", ".medium-insert-embeds-toolbar2 .medium-editor-action", a.proxy(this, "toolbar2Action")), this.$el.on("keyup click paste", a.proxy(this, "togglePlaceholder")).on("keydown", a.proxy(this, "processLink")).on("click", ".medium-insert-embeds-overlay", a.proxy(this, "selectEmbed")).on("contextmenu", ".medium-insert-embeds-placeholder", a.proxy(this, "fixRightClickOnPlaceholder"))
        }, e.prototype.backwardsCompatibility = function() {
            var b = this;
            this.$el.find(".mediumInsert-embeds").removeClass("mediumInsert-embeds").addClass("medium-insert-embeds"), this.$el.find(".medium-insert-embeds").each(function() {
                0 === a(this).find(".medium-insert-embed").length && (a(this).after(b.templates["src/js/templates/embeds-wrapper.hbs"]({
                    html: a(this).html()
                })), a(this).remove())
            })
        }, e.prototype.editorSerialize = function() {
            var b = this._serializePreEmbeds();
            return a.each(b, function(c) {
                var d = a("<div />").html(b[c].value);
                d.find(".medium-insert-embeds").removeAttr("contenteditable"), d.find(".medium-insert-embeds-overlay").remove(), b[c].value = d.html()
            }), b
        }, e.prototype.add = function() {
            var a = this.$el.find(".medium-insert-active");
            a.html(this.templates["src/js/templates/core-empty-line.hbs"]().trim()), a.is("p") && (a.replaceWith('<div class="medium-insert-active">' + a.html() + "</div>"), a = this.$el.find(".medium-insert-active"), this.core.moveCaret(a)), a.addClass("medium-insert-embeds medium-insert-embeds-input medium-insert-embeds-active"), this.togglePlaceholder({
                target: a.get(0)
            }), a.click(), this.core.hideButtons()
        }, e.prototype.togglePlaceholder = function(c) {
            var d, e, f, g = a(c.target),
                h = b.getSelection();
            h && 0 !== h.rangeCount && (d = h.getRangeAt(0), e = a(d.commonAncestorContainer), e.hasClass("medium-insert-embeds-active") ? g = e : e.closest(".medium-insert-embeds-active").length && (g = e.closest(".medium-insert-embeds-active")), g.hasClass("medium-insert-embeds-active") ? (f = g.text().trim(), "" === f && g.hasClass("medium-insert-embeds-placeholder") === !1 ? g.addClass("medium-insert-embeds-placeholder").attr("data-placeholder", this.options.placeholder) : "" !== f && g.hasClass("medium-insert-embeds-placeholder") && g.removeClass("medium-insert-embeds-placeholder").removeAttr("data-placeholder")) : this.$el.find(".medium-insert-embeds-active").remove())
        }, e.prototype.fixRightClickOnPlaceholder = function(b) {
            this.core.moveCaret(a(b.target))
        }, e.prototype.processLink = function(a) {
            var b, c = this.$el.find(".medium-insert-embeds-active");
            if (c.length) return b = c.text().trim(), "" === b && -1 !== [8, 46, 13].indexOf(a.which) ? void c.remove() : void(13 === a.which && (a.preventDefault(), a.stopPropagation(), this.options.oembedProxy ? this.oembed(b) : this.parseUrl(b)))
        }, e.prototype.oembed = function(c) {
            var d = this;
            a.support.cors = !0, a.ajax({
                crossDomain: !0,
                cache: !1,
                url: this.options.oembedProxy,
                dataType: "json",
                data: {
                    url: c
                },
                success: function(b) {
                    var e = b && b.html;
                    if (b && !e && "photo" === b.type && b.url && (e = '<img src="' + b.url + '" alt="">'), !e) return void a.proxy(d, "convertBadEmbed", c)();
                    if (e && e.indexOf("</script>") > -1) {
                        var f = a("<div>").attr("data-embed-code", e).html(e);
                        e = a("<div>").append(f).html()
                    }
                    a.proxy(d, "embed", e)()
                },
                error: function(e, f, g) {
                    var h = function() {
                        try {
                            return JSON.parse(e.responseText)
                        } catch (a) {}
                    }();
                    "undefined" != typeof b.console ? b.console.log(h && h.error || e.status || g.message) : b.alert("Error requesting media from " + d.options.oembedProxy + " to insert: " + g + " (response status: " + e.status + ")"), a.proxy(d, "convertBadEmbed", c)()
                }
            })
        }, e.prototype.parseUrl = function(b) {
            var c;
            return new RegExp(["youtube", "youtu.be", "vimeo", "instagram"].join("|")).test(b) ? (c = b.replace(/\n?/g, "").replace(/^((http(s)?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/(watch\?v=|v\/)?)([a-zA-Z0-9\-_]+)(.*)?$/, '<div class="video video-youtube"><iframe width="420" height="315" src="//www.youtube.com/embed/$7" frameborder="0" allowfullscreen></iframe></div>').replace(/^https?:\/\/vimeo\.com(\/.+)?\/([0-9]+)$/, '<div class="video video-vimeo"><iframe src="//player.vimeo.com/video/$2" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>').replace(/^https?:\/\/instagram\.com\/p\/(.+)\/?$/, '<span class="instagram"><iframe src="//instagram.com/p/$1/embed/" width="612" height="710" frameborder="0" scrolling="no" allowtransparency="true"></iframe></span>'), void this.embed(/<("[^"]*"|'[^']*'|[^'">])*>/.test(c) ? c : !1)) : (a.proxy(this, "convertBadEmbed", b)(), !1)
        }, e.prototype.embed = function(a) {
            var b = this.$el.find(".medium-insert-embeds-active");
            return a ? (b.after(this.templates["src/js/templates/embeds-wrapper.hbs"]({
                html: a
            })), b.remove(), this.core.triggerInput(), -1 !== a.indexOf("facebook") && "undefined" != typeof FB && setTimeout(function() {
                FB.XFBML.parse()
            }, 2e3), void 0) : (alert("Incorrect URL format specified"), !1)
        }, e.prototype.convertBadEmbed = function(b) {
            var c, d, e, f = this.templates["src/js/templates/core-empty-line.hbs"]().trim();
            c = this.$el.find(".medium-insert-embeds-active"), e = a(f), c.before(e), c.remove(), e.html(b), d = a(f), e.after(d), this.core.triggerInput(), this.core.moveCaret(c)
        }, e.prototype.selectEmbed = function(b) {
            if (this.core.options.enabled) {
                var c = a(b.target).hasClass("medium-insert-embeds") ? a(b.target) : a(b.target).closest(".medium-insert-embeds"),
                    d = this;
                c.addClass("medium-insert-embeds-selected"), setTimeout(function() {
                    d.addToolbar(), d.options.captions && d.core.addCaption(c.find("figure"), d.options.captionPlaceholder)
                }, 50)
            }
        }, e.prototype.unselectEmbed = function(b) {
            var c = a(b.target).hasClass("medium-insert-embeds") ? a(b.target) : a(b.target).closest(".medium-insert-embeds"),
                d = this.$el.find(".medium-insert-embeds-selected");
            return c.hasClass("medium-insert-embeds-selected") ? (d.not(c).removeClass("medium-insert-embeds-selected"), a(".medium-insert-embeds-toolbar, .medium-insert-embeds-toolbar2").remove(), this.core.removeCaptions(c.find("figcaption")), void((a(b.target).is(".medium-insert-caption-placeholder") || a(b.target).is("figcaption")) && (c.removeClass("medium-insert-embeds-selected"), this.core.removeCaptionPlaceholder(c.find("figure"))))) : (d.removeClass("medium-insert-embeds-selected"), a(".medium-insert-embeds-toolbar, .medium-insert-embeds-toolbar2").remove(), void(a(b.target).is(".medium-insert-caption-placeholder") ? this.core.removeCaptionPlaceholder(c.find("figure")) : a(b.target).is("figcaption") === !1 && this.core.removeCaptions()))
        }, e.prototype.removeEmbed = function(b) {
            var c, d;
            (8 === b.which || 46 === b.which) && (c = this.$el.find(".medium-insert-embeds-selected"), c.length && (b.preventDefault(), a(".medium-insert-embeds-toolbar, .medium-insert-embeds-toolbar2").remove(), d = a(this.templates["src/js/templates/core-empty-line.hbs"]().trim()), c.before(d), c.remove(), this.core.hideAddons(), this.core.moveCaret(d), this.core.triggerInput()))
        }, e.prototype.addToolbar = function() {
            var b, c, d, e = this.$el.find(".medium-insert-embeds-selected"),
                f = !1;
            if (0 !== e.length) {
                var g = this.core.getEditor(),
                    h = g.options.elementsContainer || "body";
                a(h).append(this.templates["src/js/templates/embeds-toolbar.hbs"]({
                    styles: this.options.styles,
                    actions: this.options.actions
                }).trim()), b = a(".medium-insert-embeds-toolbar"), c = a(".medium-insert-embeds-toolbar2"), d = e.offset().top - b.height() - 8 - 2 - 5, 0 > d && (d = 0), b.css({
                    top: d,
                    left: e.offset().left + e.width() / 2 - b.width() / 2
                }).show(), c.css({
                    top: e.offset().top + 2,
                    left: e.offset().left + e.width() - c.width() - 4
                }).show(), b.find("button").each(function() {
                    e.hasClass("medium-insert-embeds-" + a(this).data("action")) && (a(this).addClass("medium-editor-button-active"), f = !0)
                }), f === !1 && b.find("button").first().addClass("medium-editor-button-active")
            }
        }, e.prototype.toolbarAction = function(b) {
            var c = a(b.target).is("button") ? a(b.target) : a(b.target).closest("button"),
                d = c.closest("li"),
                e = d.closest("ul"),
                f = e.find("li"),
                g = this.$el.find(".medium-insert-embeds-selected"),
                h = this;
            c.addClass("medium-editor-button-active"), d.siblings().find(".medium-editor-button-active").removeClass("medium-editor-button-active"), f.find("button").each(function() {
                var b = "medium-insert-embeds-" + a(this).data("action");
                a(this).hasClass("medium-editor-button-active") ? (g.addClass(b), h.options.styles[a(this).data("action")].added && h.options.styles[a(this).data("action")].added(g)) : (g.removeClass(b), h.options.styles[a(this).data("action")].removed && h.options.styles[a(this).data("action")].removed(g))
            }), this.core.triggerInput()
        }, e.prototype.toolbar2Action = function(b) {
            var c = a(b.target).is("button") ? a(b.target) : a(b.target).closest("button"),
                d = this.options.actions[c.data("action")].clicked;
            d && d(this.$el.find(".medium-insert-embeds-selected")), this.core.triggerInput()
        }, a.fn[f + g] = function(b) {
            return this.each(function() {
                a.data(this, "plugin_" + f + g) || a.data(this, "plugin_" + f + g, new e(this, b))
            })
        }
    }(jQuery, window, document),
    function(a, b, c, d, e) {
        "use strict";

        function f(c, d) {
            this.el = c, this.$el = a(c), this.$currentImage = null, this.templates = b.MediumInsert.Templates, this.core = this.$el.data("plugin_" + g), this.options = a.extend(!0, {}, i, d), this._defaults = i, this._name = g, this.options.preview && !b.FileReader && (this.options.preview = !1), this.core.getEditor() && (this.core.getEditor()._serializePreImages = this.core.getEditor().serialize, this.core.getEditor().serialize = this.editorSerialize), this.init()
        }
        var g = "mediumInsert",
            h = "Images",
            i = {
                label: '<span class="fa fa-camera"></span>',
                deleteMethod: "POST",
                deleteScript: "delete.php",
                preview: !0,
                captions: !0,
                captionPlaceholder: "Type caption for image (optional)",
                autoGrid: 3,
                fileUploadOptions: {
                    url: "upload.php",
                    acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i
                },
                fileDeleteOptions: {},
                styles: {
                    wide: {
                        label: '<span class="fa fa-align-justify"></span>'
                    },
                    left: {
                        label: '<span class="fa fa-align-left"></span>'
                    },
                    right: {
                        label: '<span class="fa fa-align-right"></span>'
                    },
                    grid: {
                        label: '<span class="fa fa-th"></span>'
                    }
                },
                actions: {
                    remove: {
                        label: '<span class="fa fa-times"></span>',
                        clicked: function() {
                            var b = a.Event("keydown");
                            b.which = 8, a(c).trigger(b)
                        }
                    }
                },
                sorting: function() {
                    var b = this;
                    a(".medium-insert-images").sortable({
                        group: "medium-insert-images",
                        containerSelector: ".medium-insert-images",
                        itemSelector: "figure",
                        placeholder: '<figure class="placeholder">',
                        handle: "img",
                        nested: !1,
                        vertical: !1,
                        afterMove: function() {
                            b.core.triggerInput()
                        }
                    })
                },
                messages: {
                    acceptFileTypesError: "This file is not in a supported format: ",
                    maxFileSizeError: "This file is too big: "
                }
            };
        f.prototype.init = function() {
            var a = this.$el.find(".medium-insert-images");
            a.find("figcaption").attr("contenteditable", !0), a.find("figure").attr("contenteditable", !1), this.events(), this.backwardsCompatibility(), this.sorting()
        }, f.prototype.events = function() {
            a(c).on("click", a.proxy(this, "unselectImage")).on("keydown", a.proxy(this, "removeImage")).on("click", ".medium-insert-images-toolbar .medium-editor-action", a.proxy(this, "toolbarAction")).on("click", ".medium-insert-images-toolbar2 .medium-editor-action", a.proxy(this, "toolbar2Action")), this.$el.on("click", ".medium-insert-images img", a.proxy(this, "selectImage"))
        }, f.prototype.backwardsCompatibility = function() {
            this.$el.find(".mediumInsert").removeClass("mediumInsert").addClass("medium-insert-images"), this.$el.find(".medium-insert-images.small").removeClass("small").addClass("medium-insert-images-left")
        }, f.prototype.editorSerialize = function() {
            var b = this._serializePreImages();
            return a.each(b, function(c) {
                var d = a("<div />").html(b[c].value);
                d.find(".medium-insert-images").find("figcaption, figure").removeAttr("contenteditable"), b[c].value = d.html()
            }), b
        }, f.prototype.add = function() {
            var b = this,
                c = a(this.templates["src/js/templates/images-fileupload.hbs"]()),
                d = {
                    dataType: "json",
                    add: function(c, d) {
                        a.proxy(b, "uploadAdd", c, d)()
                    },
                    done: function(c, d) {
                        a.proxy(b, "uploadDone", c, d)()
                    }
                };
            (new XMLHttpRequest).upload && (d.progress = function(c, d) {
                a.proxy(b, "uploadProgress", c, d)()
            }, d.progressall = function(c, d) {
                a.proxy(b, "uploadProgressall", c, d)()
            }), c.fileupload(a.extend(!0, {}, this.options.fileUploadOptions, d)), c.click()
        }, f.prototype.uploadAdd = function(b, c) {
            var d, e = this.$el.find(".medium-insert-active"),
                f = this,
                g = [],
                h = c.files[0],
                i = this.options.fileUploadOptions.acceptFileTypes,
                j = this.options.fileUploadOptions.maxFileSize;
            return i && !i.test(h.type) ? g.push(this.options.messages.acceptFileTypesError + h.name) : j && h.size > j && g.push(this.options.messages.maxFileSizeError + h.name), g.length > 0 ? void alert(g.join("\n")) : (this.core.hideButtons(), e.is("p") && (e.replaceWith('<div class="medium-insert-active">' + e.html() + "</div>"), e = this.$el.find(".medium-insert-active"), this.core.moveCaret(e)), e.addClass("medium-insert-images"), this.options.preview === !1 && 0 === e.find("progress").length && (new XMLHttpRequest).upload && e.append(this.templates["src/js/templates/images-progressbar.hbs"]()), void((c.autoUpload || c.autoUpload !== !1 && a(b.target).fileupload("option", "autoUpload")) && c.process().done(function() {
                f.options.preview ? (d = new FileReader, d.onload = function(b) {
                    a.proxy(f, "showImage", b.target.result, c)()
                }, d.readAsDataURL(c.files[0])) : c.submit()
            })))
        }, f.prototype.uploadProgressall = function(a, b) {
            var c, d;
            this.options.preview === !1 && (c = parseInt(b.loaded / b.total * 100, 10), d = this.$el.find(".medium-insert-active").find("progress"), d.attr("value", c).text(c), 100 === c && d.remove())
        }, f.prototype.uploadProgress = function(a, b) {
            var c, d;
            this.options.preview && (c = 100 - parseInt(b.loaded / b.total * 100, 10), d = b.context.find(".medium-insert-images-progress"), d.css("width", c + "%"), 0 === c && d.remove())
        }, f.prototype.uploadDone = function(b, c) {
            a.proxy(this, "showImage", c.result.files[0].url, c)(), this.core.clean(), this.sorting()
        }, f.prototype.showImage = function(b, c) {
            var d, e, f = this.$el.find(".medium-insert-active");
            return f.click(), e = this, this.options.preview && c.context ? (d = this.getDOMImage(), d.onload = function() {
                c.context.find("img").attr("src", d.src), this.options.uploadCompleted && this.options.uploadCompleted(c.context, c), e.core.triggerInput()
            }.bind(this), d.src = b) : (c.context = a(this.templates["src/js/templates/images-image.hbs"]({
                img: b,
                progress: this.options.preview
            })).appendTo(f), f.find("br").remove(), this.options.autoGrid && f.find("figure").length >= this.options.autoGrid && (a.each(this.options.styles, function(a, b) {
                var c = "medium-insert-images-" + a;
                f.removeClass(c), b.removed && b.removed(f)
            }), f.addClass("medium-insert-images-grid"), this.options.styles.grid.added && this.options.styles.grid.added(f)), this.options.preview ? c.submit() : this.options.uploadCompleted && this.options.uploadCompleted(c.context, c)), this.core.triggerInput(), c.context
        }, f.prototype.getDOMImage = function() {
            return new b.Image
        }, f.prototype.selectImage = function(b) {
            if (this.core.options.enabled) {
                var c = a(b.target),
                    d = this;
                this.$currentImage = c, this.$el.blur(), c.addClass("medium-insert-image-active"), c.closest(".medium-insert-images").addClass("medium-insert-active"), setTimeout(function() {
                    d.addToolbar(), d.options.captions && d.core.addCaption(c.closest("figure"), d.options.captionPlaceholder)
                }, 50)
            }
        }, f.prototype.unselectImage = function(b) {
            var c = a(b.target),
                d = this.$el.find(".medium-insert-image-active");
            return c.is("img") && c.hasClass("medium-insert-image-active") ? (d.not(c).removeClass("medium-insert-image-active"), a(".medium-insert-images-toolbar, .medium-insert-images-toolbar2").remove(), void this.core.removeCaptions(c)) : (d.removeClass("medium-insert-image-active"), a(".medium-insert-images-toolbar, .medium-insert-images-toolbar2").remove(), c.is(".medium-insert-caption-placeholder") ? this.core.removeCaptionPlaceholder(d.closest("figure")) : c.is("figcaption") === !1 && this.core.removeCaptions(), void(this.$currentImage = null))
        }, f.prototype.removeImage = function(b) {
            var c, d, e;
            (8 === b.which || 46 === b.which) && (c = this.$el.find(".medium-insert-image-active"), c.length && (b.preventDefault(), this.deleteFile(c.attr("src")), d = c.closest(".medium-insert-images"), c.closest("figure").remove(), a(".medium-insert-images-toolbar, .medium-insert-images-toolbar2").remove(), 0 === d.find("figure").length && (e = d.next(), (e.is("p") === !1 || "" !== e.text()) && (e = a(this.templates["src/js/templates/core-empty-line.hbs"]().trim()),
                d.before(e)), d.remove(), this.core.hideAddons(), this.core.moveCaret(e)), this.core.triggerInput()))
        }, f.prototype.deleteFile = function(b) {
            if (this.options.deleteScript) {
                var c = this.options.deleteMethod || "POST";
                a.ajax(a.extend(!0, {}, {
                    url: this.options.deleteScript,
                    type: c,
                    data: {
                        file: b
                    }
                }, this.options.fileDeleteOptions))
            }
        }, f.prototype.addToolbar = function() {
            var b, c, d, e = this.$el.find(".medium-insert-image-active"),
                f = e.closest(".medium-insert-images"),
                g = !1,
                h = this.core.getEditor(),
                i = h.options.elementsContainer || "body";
            a(i).append(this.templates["src/js/templates/images-toolbar.hbs"]({
                styles: this.options.styles,
                actions: this.options.actions
            }).trim()), b = a(".medium-insert-images-toolbar"), c = a(".medium-insert-images-toolbar2"), d = e.offset().top - b.height() - 8 - 2 - 5, 0 > d && (d = 0), b.css({
                top: d,
                left: e.offset().left + e.width() / 2 - b.width() / 2
            }).show(), c.css({
                top: e.offset().top + 2,
                left: e.offset().left + e.width() - c.width() - 4
            }).show(), b.find("button").each(function() {
                f.hasClass("medium-insert-images-" + a(this).data("action")) && (a(this).addClass("medium-editor-button-active"), g = !0)
            }), g === !1 && b.find("button").first().addClass("medium-editor-button-active")
        }, f.prototype.toolbarAction = function(b) {
            if (null !== this.$currentImage) {
                var c = a(b.target).is("button") ? a(b.target) : a(b.target).closest("button"),
                    d = c.closest("li"),
                    e = d.closest("ul"),
                    f = e.find("li"),
                    g = this.$el.find(".medium-insert-active"),
                    h = this;
                c.addClass("medium-editor-button-active"), d.siblings().find(".medium-editor-button-active").removeClass("medium-editor-button-active"), f.find("button").each(function() {
                    var b = "medium-insert-images-" + a(this).data("action");
                    a(this).hasClass("medium-editor-button-active") ? (g.addClass(b), h.options.styles[a(this).data("action")].added && h.options.styles[a(this).data("action")].added(g)) : (g.removeClass(b), h.options.styles[a(this).data("action")].removed && h.options.styles[a(this).data("action")].removed(g))
                }), this.core.hideButtons(), this.core.triggerInput()
            }
        }, f.prototype.toolbar2Action = function(b) {
            if (null !== this.$currentImage) {
                var c = a(b.target).is("button") ? a(b.target) : a(b.target).closest("button"),
                    d = this.options.actions[c.data("action")].clicked;
                d && d(this.$el.find(".medium-insert-image-active")), this.core.hideButtons(), this.core.triggerInput()
            }
        }, f.prototype.sorting = function() {
            a.proxy(this.options.sorting, this)()
        }, a.fn[g + h] = function(b) {
            return this.each(function() {
                a.data(this, "plugin_" + g + h) || a.data(this, "plugin_" + g + h, new f(this, b))
            })
        }
    }(jQuery, window, document, MediumEditor.util);