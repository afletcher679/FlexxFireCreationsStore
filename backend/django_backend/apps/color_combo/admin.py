from django.contrib import admin
from django.forms.models import BaseInlineFormSet
from django.core.exceptions import ValidationError
from .models import ColorCombo, ColorComboColor

# Register your models here.

class ColorComboColorInlineFormSet(BaseInlineFormSet):
    def clean(self):
        super().clean()

        total_colors = 0
        for form in self.forms:
            if form.cleaned_data and not form.cleaned_data.get("DELETE", False):
                total_colors += 1

        if total_colors > 2:
            raise ValidationError("A color combo can only contain 2 colors.")

class ColorComboColorInline(admin.TabularInline):
    model = ColorComboColor
    formset = ColorComboColorInlineFormSet
    extra = 2 # exactly 2 colors
    max_num = 2

@admin.register(ColorCombo)
class ColorComboAdmin(admin.ModelAdmin):
    inlines = [ColorComboColorInline]
