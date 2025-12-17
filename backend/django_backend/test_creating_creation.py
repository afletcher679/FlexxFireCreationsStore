import os
import django

# 1️⃣ Point to your Django settings
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "django_backend.settings")

# 2️⃣ Setup Django
django.setup()

# 3️⃣ Import your model
from creations.models import Creation

# 4️⃣ Create a Creation
c = Creation.objects.create(
    name="Scripted Creation",
    description="Created from a standalone Python script",
    price=49.99
)

print(f"Created Creation with ID: {c.id}")

# 5️⃣ Optional: Query all Creations
all_creations = Creation.objects.all()
print(f"Total Creations: {all_creations.count()}")


# Check creation is in flexxfiredb by:
# psql flexxfiredb
# SELECT * FROM creations_creation;