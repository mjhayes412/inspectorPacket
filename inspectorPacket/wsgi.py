import os
import sys

from django.core.wsgi import get_wsgi_application
path = '/Users/mxh8143/hayes/inspectorPacket'
if path not in sys.path:
    sys.path.append(path)

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "inspectorPacket.settings")

application = get_wsgi_application()
