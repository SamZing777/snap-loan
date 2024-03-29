from rest_framework import (
    generics,
    permissions
    )

from .models import (
    Pay,
    Customer,
    BankDetail,
    TopUp
    )

from .serializers import (
    PaySerializer,
    CustomerSerializer,
    BankDetailSerializer,
    TopUpSerializer
    )


class PayAPIView(generics.CreateAPIView):
    queryset = Pay.objects.all()
    serializer_class = PaySerializer
    permission_classes = [permissions.IsAuthenticated,]

    def peform_create(self, serializer):
        user = self.request.user
        serializer.save(user)


class CustomerAPIView(generics.ListAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer


class CreateBankDetailAPIView(generics.CreateAPIView):
    queryset = BankDetail.objects.all()
    serializer_class = BankDetailSerializer
    permission_classes = [permissions.IsAuthenticated,]

    def peform_create(self, serializer):
        user = self.request.user
        serializer.save(user)


# class MultipleFieldLookupMixin:
#     """
#     Apply this mixin to any view or viewset to get multiple field filtering
#     based on a `lookup_fields` attribute, instead of the default single field filtering.
#     """
#     def get_object(self):
#         queryset = self.get_queryset()             # Get the base queryset
#         queryset = self.filter_queryset(queryset)  # Apply any filter backends
#         filter = {}
#         for field in self.lookup_fields:
#             if self.kwargs[field]: # Ignore empty fields.
#                 filter[field] = self.kwargs[field]
#         obj = get_object_or_404(queryset, **filter)  # Lookup the object
#         self.check_object_permissions(self.request, obj)
#         return obj


class BankDetailAPIView(generics.RetrieveUpdateAPIView):
    queryset = BankDetail.objects.all()
    serializer_class = BankDetailSerializer
    lookup_fields = ['user']
    permission_classes = [permissions.IsAuthenticated,]


class CreateTopUpAPIView(generics.CreateAPIView):
    queryset = TopUp.objects.all()
    serializer_class = TopUpSerializer
    permission_classes = [permissions.IsAuthenticated,]

    def peform_create(self, serializer):
        user = self.request.user
        serializer.save(user)
